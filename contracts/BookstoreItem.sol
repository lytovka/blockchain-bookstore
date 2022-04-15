pragma solidity >=0.8.x;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BookstoreItem is ERC721URIStorage  {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("BookstoreItem", "BITM") {
    }

    function mint(string memory itemURI) external returns(uint) {
        _tokenIds.increment();
        uint newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, itemURI);
        return _tokenIds.current();
    }

    function mint(address newOwner, string memory itemURI) external returns(uint) {
        _tokenIds.increment();
        uint newItemId = _tokenIds.current();

        _mint(newOwner, newItemId);
        _setTokenURI(newItemId, itemURI);
        return _tokenIds.current();
    }
}