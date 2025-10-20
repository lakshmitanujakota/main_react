import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="res-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = ListOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurents(filteredData);
          }}
        >
          Filter the Top Rated Restaurent
        </button>
      </div>
      <div className="res-cards">
        {ListOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
