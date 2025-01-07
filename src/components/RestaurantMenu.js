import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{
    const [resInfo, setresInfo]=useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async ()=>{
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId, {
            headers: {
              "Origin": window.location.origin,  // Sets the Origin header
            },
          });
        const json=await data.json();
        setresInfo(json.data);
    }
    if(resInfo!=null)
    {
        const {name, cuisines, cloudinaryImageId, costForTwoMessage}= resInfo.cards[2].card.card.info;
        const itemCards = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            
            <ul>
                <li>{cuisines.join(",")}</li>
                <li>{costForTwoMessage}</li>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
                <li>Diet Coke</li>
            </ul>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                        {" Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    );
    }
    
};
export default RestaurantMenu;