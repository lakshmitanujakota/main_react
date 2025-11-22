import RestaurentCard, { withVegCard } from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmering from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable : very powerfull variable
  const [ListOfRestaurents, setListOfRestaurents] = useState([]);

  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const RestaurentVegCard = withVegCard(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4236205&lng=78.3399513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>You are offline please check your internet connection!!!</h1>;
  }

  return ListOfRestaurents.length == 0 ? (
    <Shimmering />
  ) : (
    <div className="w-full px-6 md:px-12 py-6 md:py-8 bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:space-x-4 space-y-4 md:space-y-0">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          onClick={() => {
            const filteredData = ListOfRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredRestaurents(filteredData);
          }}
        >
          Filter the Top Rated Restaurent
        </button>
        <div className="flex items-center space-x-4">
          <input
            type="test"
            className="search-test"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredRestaurents.map((restaurent) => (
          //<RestaurentCard key={restaurent.info.id} resData={restaurent}/>
          
          <Link key={restaurent.info.id}   to={`/restaurant/${restaurent.info.id}`}>
            {restaurent.info.veg ? (
              <RestaurentVegCard resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
