import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //subscribibg to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-indigo-200">
      <div className="w-35">
        <img alt="logo-image" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-7">
          <li className="m-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/contact" >Contact Us</Link>
          </li>
          <Link  className="m-5" to="/cart">Cart - {cartItems.length} items</Link>
          <button
            className="m-4"
            onClick={() => {
              loginBtn === "Login" // ternary Operator For if Login then convert in Logout and viseverse
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
