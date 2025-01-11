
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <img
        className="rounded-lg h-60 w-64 object-cover mb-4"
        alt="res-logo" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl text-gray-800 mb-2">{name}</h3>

      {/* Cuisines Section */}
      <div className="flex mb-2">
        <h4 className="font-semibold text-gray-600 mr-2">Cuisines:</h4>
        <p className="text-gray-800">{cuisines.join(", ")}</p>
      </div>

      {/* Rating Section */}
      <div className="flex mb-2">
        <h4 className="font-semibold text-gray-600 mr-2">Rating:</h4>
        <p className="text-gray-800">{avgRating} stars</p>
      </div>

      {/* Cost For Two */}
      <div className="flex mb-2">
        <h4 className="font-semibold text-gray-600 mr-2">Cost for Two:</h4>
        <p className="text-gray-800">{costForTwo}</p>
      </div>

      {/* Delivery Time Section */}
      <div className="flex">
        <h4 className="font-semibold text-gray-600 mr-2">Delivery Time:</h4>
        <p className="text-gray-800">{resData.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

export default RestaurantCard;