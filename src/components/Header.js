import {LOGO_URL} from "../utils/constants";


const Header = () => {
  return(
    <div className="header">
      <div className="App-logo">
        <img src={LOGO_URL}/>
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Filter</li>
        <li>Cart</li>
      </ul>
    </div>
  )
};


export default Header;