pragma solidity >=0.8.x;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Bookstore {

    enum ListingStatus {
        Active,
        Sold,
        Removed
    }

    struct Listing {
        address seller;
        address item;
        uint itemId;
        uint price;
        ListingStatus status;
    }

    using Counters for Counters.Counter;
    Counters.Counter private _listingIds;

    mapping(uint => Listing) private _listings;

    function getListing(uint listingId) public view returns (Listing memory) {
        return _listings[listingId];
    }

    function getMaxIndex() public view returns (uint) {
        return _listingIds.current();
    }

    function listItem(address item, uint itemId, uint price) external {
        IERC721(item).transferFrom(msg.sender, address(this), itemId);

        Listing memory newListing = Listing(
            msg.sender,
            item,
            itemId,
            price,
            ListingStatus.Active
        );

        _listingIds.increment();
        uint newListingId = _listingIds.current();
        _listings[newListingId] = newListing;
    }

    function buyItem(uint listingId) external payable {
        Listing storage targetListing = _listings[listingId];

        require(targetListing.status == ListingStatus.Active, "Listing is not active");
        require(msg.sender != targetListing.seller);
        require(msg.value >= targetListing.price, "insufficient funds");

        targetListing.status = ListingStatus.Sold;

        IERC721(targetListing.item).transferFrom(address(this), msg.sender, targetListing.itemId);
        payable(targetListing.seller).transfer(targetListing.price);
    }

    function removeListing(uint listingId) public {
        Listing storage targetListing = _listings[listingId];

        require(msg.sender == targetListing.seller, "Only the seller can cancel its listing");
        require(targetListing.status == ListingStatus.Active, "Cannot Remove Listing that is not Active");
        
        targetListing.status = ListingStatus.Removed;
        IERC721(targetListing.item).transferFrom(address(this), msg.sender, targetListing.itemId);

    }

}