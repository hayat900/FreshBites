const RestaurantCard = ({ resData }) => {
    let { cloudinaryImageId, name, locality, avgRating, lastMileTravelString, costForTwo, cuisines , areaName} = resData;
    if(locality===areaName)
    {
        areaName="";
    }
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
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