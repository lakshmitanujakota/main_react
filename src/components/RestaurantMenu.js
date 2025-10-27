import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  /*
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4505418&lng=78.376219&restaurantId=28767"
    );
    
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  */
const fetchData = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4505418&lng=78.376219&restaurantId=28767"
    );

    if (!data.ok) {
      throw new Error("Network response not ok: " + data.status);
    }

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};


  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;


