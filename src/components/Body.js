import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING", {
      headers: {
        "Origin": window.location.origin,  // Sets the Origin header
      },
    });
  const json = await data.json();
  setListOfRestraunt(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFilteredRestaurant(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between">
      <div className="flex items-center bg-white p-2 rounded-lg shadow-lg w-full max-w-xl">
  <input
    type="text"
    className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition duration-300 ease-in-out"
    placeholder="Search for restaurants"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <button
    className="ml-4 px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
    onClick={() => {
      const filtered = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }}
  >
    Search
  </button>
</div>

        <div className="search m-4 p-4 flex items-center">
          {/* Filter Button */}
        <button
    className="px-6 py-3 bg-pink-300 text-black font-semibold rounded-lg shadow-lg hover:bg-pink-400 transform hover:scale-105 transition-all duration-200"
    onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              <RestaurantCard resData={restaurant?.info} />
              
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;