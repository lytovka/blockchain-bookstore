pragma solidity >=0.8.x;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BookstoreItem is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("BookstoreItem", "BITM") {
    }

    function mint() external returns(uint) {
        _tokenIds.increment();
        _mint(msg.sender, _tokenIds.current());
        return _tokenIds.current();
    }
}