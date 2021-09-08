import React from 'react';

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/imageGrid';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
           <div className="container mx-auto px-4 lg:px-20">
               <ImageGrid images={[
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                   "https://b.zmtcdn.com/data/pictures/1/110271/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
               ]} />
           </div>
        </>
    );
};

export default RestaurantLayout;