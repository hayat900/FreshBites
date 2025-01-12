import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showitem,setshowindex }) => {
 
    const handleClick=()=>{
        setshowindex();
    }
    //console.log(data.itemCards);
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg" >
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showitem && <ItemList items={data.itemCards} display={true}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;