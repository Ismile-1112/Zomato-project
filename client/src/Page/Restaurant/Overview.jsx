import React from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';

const Overview = () => {
    const { id } = useParams();
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                           <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection 
                            menuTitle="Menu" 
                            pages="3"
                            image="https://b.zmtcdn.com/data/menus/271/110271/454437adeaf71856bbcc224d7d9e1f89.jpg?fit=around%7C200%3A200crop=200%3A200%3B%2A%2C%2A"
                        />
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Burger</span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Fast Food</span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Beverages</span>
                    </div>
                    <h4 className="text-lg font-medium mt-8 mb-2">Popular Dishes</h4>
                    <p>Mc Veggie, Maharaja Mac, Mocha Frappe, Peri Peri Fries, Burgers, Hot Chocolate</p>
                    <h4 className="text-lg font-medium mt-8 mb-2">People Say This Place Is Known For</h4>
                    <p>Elegantly Decorated, Good Crowd, Low Price, Polite Staff, Worth the Money, Hygiene</p>
                    <div className="my-4">
                       <h4 className="text-lg font-medium">Average Cost</h4>
                       <h6>₹400 for two people (approx.)</h6>
                       <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                       <h4 className="text-lg font-medium">Similar Restaurants</h4>
                       <Slider {...settings}>
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18549832/572999873b161d836dce1cb64827ef6f_featured_v2.jpg?output-format=webp"
                                title="Burger King" 
                            />
                       </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:block md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md">
                    <div>
                        <h4 className="text-xl font-medium">Call</h4>
                        <h5 className="text-zomato-400 font-medium">+918928304108</h5>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium">Direction</h4>
                        <div className="w-full h-48">
                            <MapContainer center={[23.024434851492178, 72.50689971281018]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[23.024434851492178, 72.50689971281018]}>
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Overview;
