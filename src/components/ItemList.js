import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch =useDispatch();

  const handleAddItem=(item)=>{
    //Dispatch an action
    dispatch(addItem(item));

  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          classNAme="p-2 m-2 boarder boarder-gray-200 boarder-b-2 text-left"
        >
          <div className="w-9/12">
            <div className="py -2">
              <span>{item.card.info.name}</span>
              <span>
                {item.card.info.price
                  ? item.card.info.price
                  : item.card.info.defaultsprice}
                /100
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId}></img>
            <div className="absoulte">
              <button className="mx-16 p-2 rounded-lg bg-black text-white shadow-lg"
              onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
