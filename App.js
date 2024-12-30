import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./restaurantData.js";
/*
<div id="parent">
    <div id="child">
        <h1>I am H1</h1>
    </div>
</div>    
*/  
/*const heading = React.createElement("div", //React object is ceeated
    {id:"parent"}, 
    React.createElement("div",
    {id:"child"},
    [
    React.createElement("h1", {},"I am H1"),
    React.createElement("h2", {},"I am H2")
    ]
    )
);*/
    /*const Titleheading = ()=>(
    <h1 id="Heading">Hello From JSX</h1>
    )
    const HeadingComponent =()=>(
       
        <div> {Titleheading()}
        <Titleheading/>
        <Titleheading></Titleheading>
        <h2>Hello from functional component</h2>
        </div>
    )*/

    /* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
   const Header=()=>(
    <div className="header">
        <div>
            <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                <i class="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
        </div>
    </div>
   );

  // Restaurant card component: Image, name, cuisine
  const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, locality, avgRating, lastMileTravelString, costForTwo, cuisines } = resData;
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
            <h2>{name}</h2>
<p className="locality">{locality}</p>
<p className="cuisines">{cuisines.join(", ")}</p>
<div className="card-info">
    <div className="rating">
        <i className="fa-solid fa-star"></i> {avgRating}
    </div>
    <div className="distance">
        {lastMileTravelString}
    </div>
    <div className="cost">
        {costForTwo}
    </div>
</div>
</div>
    );
};

    const Body = () => {
        return (
          <div className="restaurant-list">
            {restaurantList.restaurants.map((restaurant) => {
              return <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />;
            })}
          </div>
        );
      };

   const Applayout=()=>(
    <div className="app">
        <Header/>
        <Body/>
        </div>

   )
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Applayout/>);// it converts that object into html element
