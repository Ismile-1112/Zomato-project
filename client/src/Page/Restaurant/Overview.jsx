import React from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';


const Overview = () => {
    const { id } = useParams();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
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
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                       <Mapview title="McDonald's" phno="+918928304219" mapLocation={[23.024434851492178, 72.50689971281018]}  address="3, Ground Floor, Wide Angle Cinema, S G Highway, Satellite, Ahmedabad"/>
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                    <Mapview title="McDonald's" phno="+918928304219" mapLocation={[23.024434851492178, 72.50689971281018]}  address="3, Ground Floor, Wide Angle Cinema, S G Highway, Satellite, Ahmedabad"/>
                </aside>
            </div>
        </>
    );
};

export default Overview;
