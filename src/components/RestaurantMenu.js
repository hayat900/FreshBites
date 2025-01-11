import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showindex, setshowindex]=useState(null);


  if (resInfo !== null) {
    const {
      name,
      cuisines,
      cloudinaryImageId,
      costForTwoMessage,
    } = resInfo.cards[2].card.card.info;

    const itemCards =
      resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);

    return (
      <div className="menu max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>

        <div className="mb-6">
          <img
            className="w-[50%] h-[50%] object-cover rounded-lg mb-4"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt={name}
          />
          <ul className="text-gray-700">
            <li className="text-xl font-semibold mb-2">{cuisines.join(", ")}</li>
            <li className="text-lg mb-2">{costForTwoMessage}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Menu</h2>

        <div className="categories-container flex flex-col justify-start">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showitem ={ index=== showindex?true:false}
              setshowindex={()=>setshowindex(index)}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default RestaurantMenu;
