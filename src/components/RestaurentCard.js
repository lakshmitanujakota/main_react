import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    id,
  } = resData?.info;

  return (
    <div className="res-card">
      <Link to={`/restaurant/${id}`}>
        <img className="res-image" alt="" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} </h4>
        <h4>{deliveryTime} mins</h4>
      </Link>
    </div>
  );
};

export default RestaurentCard;
