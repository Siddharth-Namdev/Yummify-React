import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router"; // ✅ make sure you're using react-router-dom in v6
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DATA);

    if (!data.ok) {
      throw new Error(`Error from API: ${response.status}`);
    }
    const json = await data.json();
    const cards = json?.data?.cards || [];

    const restaurantCard = cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-3xl font-bold text-red-600 mt-10">
        🚫 You are offline!!
      </h1>
    );
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gradient-to-b from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] min-h-screen py-6 px-4 pt-24">
      <div className="filter flex flex-wrap justify-center items-center gap-4 mb-6">
        <div className="input flex flex-wrap items-center gap-2">
          <input
            type="text"
            className="border border-orange-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-pink-600 hover:to-orange-500 cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <span className="relative z-10">🔍 Search</span>
          </button>
        </div>

        <button
          className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-pink-600 hover:to-orange-500 cursor-pointer"
          onClick={() => {
            const filtered = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filtered);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurant/" + restaurent.info.id}
            className="hover:scale-105 transition-transform duration-200"
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
