import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';

import FoodList from '../../Components/restaurant/Order-Online/FoodList';
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r-2 overflow-y-scroll border-gray-200 h-screen md:block w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500"><AiOutlineCompass />Live track your order | <BiTimeFive />46 min</h4>
                    </div>
                    <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                        <FoodList title="Recommended" items={[
                            {
                                price: "246.66", 
                                rating: 3,
                                description: "Savings of Rs 50! on a combo Of American Cheese Supreme-Veg Burger + Drink of your choice (M) + Fries (M).",
                                title: "McSaver American Cheese Supreme - Veg Meal",
                                image: "https://b.zmtcdn.com/data/dish_photos/153/d1c0258b47ff23a83128e065e2e95153.jpg?fit=around|130:130&crop=130:130;*,*"
                            },
                            {
                                price: "246.66", 
                                rating: 3,
                                description: "Savings of Rs 50! on a combo Of American Cheese Supreme-Veg Burger + Drink of your choice (M) + Fries (M).",
                                title: "McSaver American Cheese Supreme - Veg Meal",
                                image: "https://b.zmtcdn.com/data/dish_photos/153/d1c0258b47ff23a83128e065e2e95153.jpg?fit=around|130:130&crop=130:130;*,*"
                            },
                        ]} />     
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
