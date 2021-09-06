import React, { useState } from 'react';

// Components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] =  useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/3/111153/3dd692c6d9a699e9c483d60f9bfaed17.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Day 'N' Night",
            cuisine: ["North Indian", "South Indian", "Fast Food", "Chinese", "Street Food", "Pizza", "Sandwich", "Beverages"],
            averageCost: 150,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 38,
            restaurantReviewValue: 3.5
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/7/110237/28e5e4911e9223d76e984a0754f7c242.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Kabir Restaurant",
            cuisine: ["North Indian", "Fast Food", "Chinese"],
            averageCost: 150,
            isPro: false,
            isOff: 75,
            durationOfdelivery: 43,
            restaurantReviewValue: 4.0
        },
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/2/18549832/e01ffc3a4d1f4a76e63b3250299f4793.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Burger King",
            cuisine: ["Burger", "Fast Food", "Beverages"],
            averageCost: 150,
            isPro: false,
            isOff: 75,
            durationOfdelivery: 42,
            restaurantReviewValue: 4.1
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/*<Brand />*/}
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;
