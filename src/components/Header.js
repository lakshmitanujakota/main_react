import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <img src={LOGO_URL} className="w-48 h-48 object-contain" />
      </div>
      <ul className="flex items-center space-x-6 text-gray-700 font-large">
        <li>Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
        <li>
          {" "}
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about"> About Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact Us </Link>
        </li>
        <li>
          {" "}
          <Link to="/grocery">Grocery </Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            btnNameReact == "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
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
