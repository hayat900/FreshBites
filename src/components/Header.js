import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();

   // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  
  const { loggedInUser, setusername } = useContext(UserContext);
  const handleAddUsername = () => {
    navigate("/login"); // Navigate to the login page when clicked
  };

  return (
    <div className="flex items-center justify-between h-32 text-black shadow-lg p-4 rounded-lg" style={{ backgroundColor: "rgb(106, 102, 157)" }}>

      {/* Navbar and Buttons */}
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6 font-semibold">
          <li className="text-lg hover:text-gray-300">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li>
            <Link className="text-lg hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-300" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-300" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-300" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="fa-solid fa-cart-shopping hover:text-gray-300" to="/cart">
            ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>

      {/* User Greeting and Login/Logout Button */}
      <div className="ml-auto flex items-center">
        {loggedInUser ? (
          <span className="text-lg font-semibold text-black px-4">
            Hello, {loggedInUser}!
          </span>
        ) : (
          <button
            onClick={handleAddUsername}
            className="bg-[#1C325B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#295dbc] transition-colors"
          >
            Add Username
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
