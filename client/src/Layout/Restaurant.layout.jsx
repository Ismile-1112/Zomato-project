import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/imageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';

const RestaurantLayout = (props) => {
    return (
        <>
            <RestaurantNavbar />
           <div className="container mx-auto px-4 lg:px-40 pb-20">
               <ImageGrid images={[
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
               ]} />
               <RestaurantInfo name="McDonald's" restaurantRating="4.2" deliveryRating="3.9" cuisine="Burger, Fast Food, Beverages" address="Satellite, Ahmedabad" />
               <div className="my-4 flex flex-wrap gap-3">
                   <InfoButtons isActive>
                       <TiStarOutline /> Add Review
                   </InfoButtons>
                   <InfoButtons>
                       <RiDirectionLine /> Direction
                   </InfoButtons>
                   <InfoButtons>
                       <BiBookmarkPlus /> Bookmark
                   </InfoButtons>
                   <InfoButtons>
                       <RiShareForwardLine /> Share
                   </InfoButtons>
               </div>
               <div className="my-10">
                  <TabContainer></TabContainer>
               </div>
               {props.children}
           </div>
        </>
    );
};

export default RestaurantLayout;