import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { MOCK_MENUS } from "../utils/menumockData";


const useRestaurentMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData(resId);
  }, []);

  // umcomment below code if swiggy api works
  /*
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    //console.log(json.data)
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

  return resInfo;
};

export default useRestaurentMenu;