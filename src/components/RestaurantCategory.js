import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data, showItems, setShowIndex }) => {


    const handleClick=()=>{
       setShowIndex();
    };

  return (
    <div>
      {/**Header */}
      <div className="m-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
      </div>
      {/**Body */}
     { showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
