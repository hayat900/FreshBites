const RestaurantCard = ({ resData }) => {
    let { cloudinaryImageId, name, locality, avgRating, lastMileTravelString, costForTwo, cuisines , areaName} = resData;
    if(locality===areaName)
    {
        areaName="";
    }
    return (
        <div className="w-64 p-4 m-2 shadow-lg h-[35rem]">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name}  className="w-64 h-64" />
            <h2>{name}</h2>
<p className="locality">{locality}</p>
<p className="locality">{areaName}</p>
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
export default RestaurantCard;