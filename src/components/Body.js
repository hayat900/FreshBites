import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => { 
  const [listofRestaurants, setrestaurantList] = useState([]);
  const [filteredRestaurants, setfilteredList] = useState([]);
  const [searchText, setsearchtext] = useState("");
  useEffect(() => {
    fetchData()
  }, []);
  
  const fetchData = async () => {
    const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING", {
      headers: {
        "Origin": window.location.origin,  // Sets the Origin header
      },
    });
  const json = await data.json();
  setrestaurantList(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setfilteredList(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  //setrestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  if(listofRestaurants.length===0)
  {
    <Shimmer/>
  }

};
  return (
  <div className = "body">
<div className = "filter">
  <div className="search">
    <input type ="text" className="searchbox" value = {searchText} onChange={(e)=>{
setsearchtext(e.target.value);
    }}></input>
    <button onClick={()=>{
      console.log(searchText);
      const filtereddata = restaurantList.restaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setfilteredList(filtereddata);
    }}>
      Search
      </button>
  </div>
  <button className = "filter-btn" onClick={()=>{
    const filtereddata = restaurantList.restaurants.filter((res)=>res.info.avgRating>4);
    setfilteredList(filtereddata);
  }
  }>
    Filter greater than 4
  </button>
</div>
  
<div className="restaurant-list">
  {filteredRestaurants.map((restaurant) => {
    console.log(restaurant);
    return (
      <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
        <RestaurantCard resData={restaurant.info} />
      </Link>
    );
  })}
</div>
    </div>
  );
}
  export default Body;