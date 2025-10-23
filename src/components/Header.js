import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const[btnNameReact, setBtnNameReact]=useState("Login");

  return (
    <div className="header">
      <div className="App-logo">
        <img src={LOGO_URL} />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Filter</li>
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
