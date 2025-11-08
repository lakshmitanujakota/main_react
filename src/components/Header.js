import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const[btnNameReact, setBtnNameReact]=useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="App-logo">
        <img src={LOGO_URL} />
      </div>
      <ul>
        <li>Online Status : { onlineStatus ? "🟢": "🔴"} </li>
        <li> <Link to="/">Home </Link></li>
        <li>
         <Link to="/about"> About Us</Link> </li>
        <li> <Link to="/contact">Contact Us </Link></li>
        <li> <Link to="/grocery">Grocery </Link></li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            console.log(btnNameReact);
          }}
        >
          {btnNameReact}
        </button>
      </ul>
    </div>
  );
};

export default Header;
