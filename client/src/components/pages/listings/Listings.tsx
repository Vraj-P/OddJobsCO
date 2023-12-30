import {ListingCard} from "./ListingCard";
import './styles.scss';
import {Listing} from "./Listing";
import {CreateListingForm} from "./ListingForm";
import {ServiceProviderProfile} from "../serviceProviderProfile/ServiceProviderProfile";
import {EditServiceProviderProfile} from "../serviceProviderProfile/EditServiceProviderProfile";
import {FilterButton} from "./filterButton/FilterButton";

export const Listings = () => {
  return (
    <>
      <div className={'listingCardContainer'}>
        <FilterButton/>
        <EditServiceProviderProfile/>
      </div>
    </>
  )
}