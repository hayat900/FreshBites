import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  
  const { loggedInUser, setusername } = useContext(UserContext);
  const handleAddUsername = () => {
    navigate("/login"); // Navigate to the login page when clicked
  };

  return (
    <div className="flex justify-between items-center  text-white shadow-lg p-4 rounded-lg "style={{ backgroundColor: "rgb(68, 23, 82)" }}>
      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-56"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"
          alt="Logo"
        />
      </div>

      {/* Navbar and Buttons */}
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6">
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
            <Link className="text-lg hover:text-gray-300" to="/cart">
              Cart
            </Link>
          </li>
        </ul>

        {/* User Greeting and Login/Logout Button */}
        <div className="flex items-center">
          {loggedInUser ? (
            <span className="text-lg font-semibold text-yellow-300 px-4">
              Hello, {loggedInUser}!
            </span>
          ) : (
            <button
              onClick={handleAddUsername}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              Add Username
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
