// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./IERC4907.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./@rarible/royalties/contracts/IERC2981.sol";
import "./@rarible/royalties/contracts/RoyaltiesV2.sol";
import "./@rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol";
import "./@rarible/royalties/contracts/LibRoyaltiesV2.sol";
import "./@rarible/royalties/contracts/LibPart.sol";

contract Erebrus is
    Context,
    ERC721,
    IERC4907,
    AccessControlEnumerable,
    ERC721Enumerable,
    ERC721Burnable,
    RoyaltiesV2Impl
{
    // Set Constants for Interface ID and Roles
    bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

    bytes32 public constant EREBRUS_ADMIN_ROLE =
        keccak256("EREBRUS_ADMIN_ROLE");
    bytes32 public constant EREBRUS_OPERATOR_ROLE =
        keccak256("EREBRUS_OPERATOR_ROLE");
    bytes32 public constant EREBRUS_WHITELISTED_ROLE =
        keccak256("EREBRUS_WHITELISTED_ROLE");

    uint256 public immutable maxSupply; //set in the constructor

    uint public immutable batchId = 1;

    mapping(uint256 => string) public clientConfig;
    mapping(uint256 => UserInfo) internal _users; // storing the data of the user who are renting the NFT
    mapping(address => uint) public nftMints;

    using Strings for uint256;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    bool public revealed = false;
    uint private balance;
    bool private allowListMintOpen = false;
    bool private mintPaused = true;
    uint256 public publicSalePrice;
    uint256 public allowListSalePrice;
    string public baseURI;
    string public revealUri;

    event ClientConfigUpdated(uint tokenId, string data, string newData);
    event CollectionURIRevealed(string revealedURI);

    modifier whenNotpause() {
        require(mintPaused == true, "The minting is paused");
        _;
    }

    struct UserInfo {
        address user; // address of user role
        uint64 expires; // unix timestamp, user expires
    }

    struct SubscriptionStatus {
        address accountOperator;
        uint256 rateAmount;
        uint256 renewalFee;
        uint256 subscriptionTime;
        //string credentials;
        bool valid;
    }

    constructor(
        string memory name,
        string memory symbol,
        string memory _URI,
        uint256 _publicSalePrice,
        uint256 _allowListSalePrice,
        uint _maxSupply
    ) ERC721(name, symbol) {
        baseURI = _URI;
        publicSalePrice = _publicSalePrice;
        allowListSalePrice = _allowListSalePrice;

        _setupRole(EREBRUS_ADMIN_ROLE, _msgSender());

        _setRoleAdmin(EREBRUS_ADMIN_ROLE, EREBRUS_ADMIN_ROLE);
        _setRoleAdmin(EREBRUS_WHITELISTED_ROLE, EREBRUS_OPERATOR_ROLE);
        _setRoleAdmin(EREBRUS_OPERATOR_ROLE, EREBRUS_ADMIN_ROLE);

        maxSupply = _maxSupply;
    }

    function pause() public onlyRole(EREBRUS_ADMIN_ROLE) {
        mintPaused = true;
    }

    function unpause() public onlyRole(EREBRUS_ADMIN_ROLE) {
        mintPaused = false;
    }

    function setTheOperator(
        address operator
    ) external onlyRole(EREBRUS_ADMIN_ROLE) {
        _setupRole(EREBRUS_OPERATOR_ROLE, operator);
    }

    function setPrice(
        uint256 _publicSalePrice,
        uint256 _allowlistprice
    ) external onlyRole(EREBRUS_ADMIN_ROLE) {
        publicSalePrice = _publicSalePrice;
        allowListSalePrice = _allowlistprice;
    }

    //reveal the token URI by overriding the function
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        // fix this
        string memory Uri = _baseURI(); //ERC721
        if (revealed) {
            return string(abi.encodePacked(Uri, "/", tokenId.toString()));
        } else {
            return Uri;
        }
    }

    function UpdateAllowList(
        address _user
    ) external onlyRole(EREBRUS_OPERATOR_ROLE) {
        _setupRole(EREBRUS_WHITELISTED_ROLE, _user);
    }

    // Populate the Allow List
    function setAllowList(
        address[] calldata addresses
    ) external onlyRole(EREBRUS_ADMIN_ROLE) {
        for (uint256 i = 0; i < addresses.length; i++) {
            _setupRole(EREBRUS_WHITELISTED_ROLE, addresses[i]);
        }
    }

    // Modify the mint windows
    function editMintWindows(
        bool _allowListMintOpen
    ) external onlyRole(EREBRUS_ADMIN_ROLE) {
        allowListMintOpen = _allowListMintOpen;
    }

    function mintNFT() external payable whenNotpause {
        uint256 tokenId = _tokenIdCounter.current();
        uint mint;
        if (allowListMintOpen) {
            require(
                hasRole(EREBRUS_WHITELISTED_ROLE, _msgSender()),
                "You are not on the allow list"
            );
            require(msg.value >= allowListSalePrice, "Not Enough Funds");
            require(tokenId < (maxSupply * 30) / 100, "Supply is exceeded");

            uint _Value = msg.value / allowListSalePrice;
            require(_Value <= 2, "User can't mint more than 2 Nft's");
            require(
                nftMints[_msgSender()] < 2,
                "Nft's can't be minted anymore"
            );
            if (nftMints[_msgSender()] == 0) {
                mint = _Value;
            } else {
                require(
                    _Value < 2,
                    "You can't mint 2 nft , value should be less"
                );
                mint = _Value;
            }
        } else {
            require(msg.value >= publicSalePrice, "Not Enough Funds");
            mint = 1;
        }
        for (uint i = 0; i < mint; i++) {
            _tokenIdCounter.increment();
            tokenId = _tokenIdCounter.current();
            require(tokenId <= maxSupply, "Erebrus: NFT Collection Sold Out!");
            _safeMint(_msgSender(), tokenId);
        }
    }

    function _setBaseURI(string memory _URI) internal {
        baseURI = _URI;
    }

    function withdraw() external onlyRole(EREBRUS_ADMIN_ROLE) whenNotpause {
        // get the balance of the contract
        (bool callSuccess, ) = payable(_msgSender()).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Call failed");
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 /* batchSize*/
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, 1);
    }

    /************** REVEAL ****************************/

    function revealCollection() external onlyRole(EREBRUS_ADMIN_ROLE) {
        revealed = true;
    }

    function reveal(string memory _URI) external onlyRole(EREBRUS_ADMIN_ROLE) {
        if (revealed) {
            _setBaseURI(_URI);
        }
    }

    /******************************************************* */

    /*****  DATA TOKEN *******/

    function writeClientConfig(
        uint256 tokenId,
        string memory newData
    ) external onlyRole(EREBRUS_ADMIN_ROLE) {
        require(_exists(tokenId), "Erebrus: Non-Existent Token");
        clientConfig[tokenId] = newData;
        emit ClientConfigUpdated(tokenId, clientConfig[tokenId], newData);
    }

    /********************************************************************* */
    /** ERC4907 Functionalities **/

    /// @notice set the user and expires of an NFT
    /// @dev The zero address indicates there is no user
    /// Throws if `tokenId` is not valid NFT
    /// @param user  The new user of the NFT
    /// @param expires  UNIX timestamp, The new user could use the NFT before expires

    function setUser(
        uint256 tokenId,
        address user,
        uint64 expires
    ) public virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Erebrus: transfer caller is not owner nor approved"
        );
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    //@notice If the owner wants to transfer the there should be zero users for that token
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override(ERC721, IERC721) {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Erebrus: caller is not token owner or approved"
        );
        require(
            _users[tokenId].expires >= block.timestamp,
            "Expiration has not been completed"
        );
        if (from != to && _users[tokenId].expires >= block.timestamp) {
            delete _users[tokenId];
            emit UpdateUser(tokenId, address(0), 0);
        }
        super._safeTransfer(from, to, tokenId, data);
    }

    /********************************************************************************** */

    /** ROYALTIES **/
    function setRoyalties(
        uint _tokenId,
        address payable _royaltiesReceipientAddress,
        uint96 _percentageBasisPoints
    ) public onlyRole(EREBRUS_ADMIN_ROLE) {
        LibPart.Part[] memory _royalties = new LibPart.Part[](1);
        _royalties[0].value = _percentageBasisPoints;
        _royalties[0].account = _royaltiesReceipientAddress;
        _saveRoyalties(_tokenId, _royalties);
    }

    /********************************************* */

    /**Getter Functions **/

    /// @notice get the clientConfig[Data Token]
    function readClientconfig(
        uint256 tokenId
    ) external view returns (string memory) {
        require(_exists(tokenId), "Erebrus: Non-Existent Token");
        return clientConfig[tokenId];
    }

    /******************   RENTAL      *********************** */
    /// @notice Get the user address of an NFT
    /// @dev The zero address indicates that there is no user or the user is expired
    /// @param tokenId The NFT to get the user address for
    /// @return The user address for this NFT
    function userOf(
        uint256 tokenId
    ) public view virtual override returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        } else {
            return address(0);
        }
    }

    /// @notice Get the user expires of an NFT
    /// @dev The zero value indicates that there is no user
    /// @param tokenId The NFT to get the user expires for
    /// @return The user expires for this NFT
    function userExpires(
        uint256 tokenId
    ) public view virtual override returns (uint256) {
        return _users[tokenId].expires;
    }

    /************************************* */
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(AccessControlEnumerable, ERC721, ERC721Enumerable)
        returns (bool)
    {
        if (interfaceId == LibRoyaltiesV2._INTERFACE_ID_ROYALTIES) return true;
        if (interfaceId == _INTERFACE_ID_ERC2981) return true;
        if (interfaceId == type(IERC4907).interfaceId) return true;
        return super.supportsInterface(interfaceId);
    }
}
