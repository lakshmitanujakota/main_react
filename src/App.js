import React, {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {useState, useEffect} from "react";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  
  const[userName, setUserName]=useState();

  useEffect(()=>{
    const data={name:"Lakshmi Tanuja"};
    setUserName(data.name);
  },[]);

  return(
    <Provider store={appStore}>
    <UserContext.Provider value ={{loggedInUser: userName}}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  )
};

const appRouter =createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children :[
        {
      path:"/",
      element:<Body/>,
    },
      {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/cart",
      element:<Cart/>
    }
    ],
      errorElement:<Error/>,
    },
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
