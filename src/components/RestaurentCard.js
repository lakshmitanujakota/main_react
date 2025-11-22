import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    id,
    costForTwo,
  } = resData?.info;

  return (
    <div className="w-full max-w-xs h-80 flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden mb-6">
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
          {avgRating}
        </h4>
        <h4 className="flex justify-between text-sm text-gray-700 font-semibold px-2">
          {costForTwo}
        </h4>
        <h4 className="px-2">{deliveryTime} mins</h4>
    </div>
  );
};

export const withVegCard = (RestaurentCard)=> {
 return (props) => {
  return (
    <div className="relative">
      <span className="absolute top-2 left-2  bg-green-600 text-white text-[10px] font-semibold w-8 h-6 flex items-center justify-center rounded-full shadow-md">
        Veg
      </span>
      <RestaurentCard {...props}/>
    </div>
  )
 }
};

export default RestaurentCard;
