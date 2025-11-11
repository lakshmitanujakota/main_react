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
    <div className="w-full max-w-xs h-80 flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden mb-6">
      <Link to={`/restaurant/${id}`}>
        <img
          className="w-full h-44 object-cover "
          alt=""
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate px-2">
          {name}
        </h3>
        <h4 className="text-sm text-gray-600 mb-1 truncate px-2">
          {cuisines.join(", ")}
        </h4>
        <h4 className="flex justify-between text-sm text-gray-700 font-semibold px-2">
          {avgRating}{" "}
        </h4>
        <h4 className="px-2">{deliveryTime} mins</h4>
      </Link>
    </div>
  );
};

export default RestaurentCard;
