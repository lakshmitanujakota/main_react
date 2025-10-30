import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MOCK_MENUS } from "../utils/menumockData";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData(resId);
  }, [resId]);

  // umcomment below code if swiggy api works
  /*
  const fetchData = async () => {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4421762&lng=78.3605332&restaurantId=11094"
    );
    
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
   
  };
   */

  const fetchData = async (id) => {
    const data = MOCK_MENUS[Number(id)];
    if (!data) {
      console.error("Restaurant is Not at opened", id);
      return;
    }
    setResInfo(data.data);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} -{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
