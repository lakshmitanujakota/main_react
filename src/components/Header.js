import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const[btnNameReact, setBtnNameReact]=useState("Login");

  return (
    <div className="header">
      <div className="App-logo">
        <img src={LOGO_URL} />
      </div>
      <ul>
        <li> <Link to="/">Home </Link></li>
        <li>
         <Link to="/about"> About Us</Link> </li>
        <li> <Link to="/contact">Contact Us </Link></li>
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
