import RestaurentCard  from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus(); // this is give true or false vale which is import from UseOnlineStatus custom hook

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DATA);

    const json = await data.json();
    //console.log(json);
    const cards = json?.data?.cards || [];

    const restaurantCard = cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

    console.log(filteredRestaurant);
  if (onlineStatus === false) return <h1> You are offline!!</h1>; // check if No Enternet show this and return

  //Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    //Tarnary Operator
    <div className="body ">
      <div className="filter flex">
        <div className="input">
          <input
            type="text"
            className="border border-amber-950 m-5 "
            //value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 m-4 bg-fuchsia-200 rounded-2xl cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 m-4 bg-fuchsia-200 rounded-2xl cursor-pointer"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurant(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurant/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Body;
