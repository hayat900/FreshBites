const ItemList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
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
          <div className="w-3/4 p-4">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
              className="w-full object-cover rounded-lg"
            />
          </div>
          {/* Add button moved to bottom-right */}
          <button
            className="absolute bottom-4 right-4 p-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300 ease-in-out"
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
