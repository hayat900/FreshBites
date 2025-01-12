import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../util/cartSlice";
import { useState, useEffect } from "react";

const ItemList = (props) => {
  const { items, display } = props;
  const [showSuccess, setShowSuccess] = useState(false); // To control the success message visibility

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action to add item
    dispatch(addItem(item));
    setShowSuccess(true);
  };
  const handleRemoveItem = (item) => {
    console.log(item);
    // Dispatch an action to add item
    dispatch(removeItem(item));
    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      // Hide the success message after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 3000 ms = 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }
  }, [showSuccess]);

  return (
    <div>
      {/* Conditionally display the success message banner */}
      {showSuccess && display && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300">
          Item Added Successfully!
        </div>
      )}
      {showSuccess && !display && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300">
          Item Deleted Successfully!
        </div>
      )}
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="relative p-4 m-4 border-b-2 border-gray-200 flex justify-between items-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="w-8/12">
            <div className="py-2">
              <h3 className="font-bold text-lg text-gray-800">
                {item.card.info.name}
              </h3>
              <span className="text-gray-500 text-md">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {item.card.info.description}
            </p>
          </div>

          {/* Create a container for image and button to prevent overlap */}
          <div className="w-72 p-4 flex flex-col items-center">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          
            {/* Button placed outside the image, at the bottom of the container */}
            {display && (
              <button
                onClick={() => handleAddItem(item)}
                className="mt-4 p-2 w-full rounded-lg bg-black text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
              >
                Add +
              </button>
            )}
            {!display && (
              <button
                onClick={() => handleRemoveItem(index)}
                className="mt-4 p-2 w-full rounded-lg bg-black text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
              >
                Remove +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
