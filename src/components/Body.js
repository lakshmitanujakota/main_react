import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmering from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable : very powerfull variable
  const [ListOfRestaurents, setListOfRestaurents] = useState([]);
  
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4236205&lng=78.3399513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus == false)
  {
    return <h1>You are offline please check your internet connection!!!</h1>
  };

  return  ListOfRestaurents.length == 0 ?  ( <Shimmering /> ) : (
    <div className="res-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = ListOfRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredRestaurents(filteredData);
          }}
        >
          Filter the Top Rated Restaurent
        </button>
        <div className="search">
          <input
            type="test"
            className="search-test"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurents = ListOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-cards">
        {filteredRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
