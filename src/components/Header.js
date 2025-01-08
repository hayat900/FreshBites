   import { useState, } from "react";
   import { Link } from "react-router-dom";
   import useOnlineStatus from "../util/useOnlineStatus";

   
   const Header = () => {
     const [btnNameReact, setBtnNameReact] = useState("Login");
   
     const onlineStatus = useOnlineStatus();

   
     return (
       <div className="flex justify-between bg-blue-950 shadow-lg m-2">
         <div className="logo-container">
           <img className="w-56" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" />
         </div>
         <div className="flex items-center text-white">
           <ul className="flex p-4 m-4 text-white">
             <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
             <li className="px-4">
               <Link to="/">Home</Link>
             </li>
             <li className="px-4">
               <Link to="/about">About Us</Link>
             </li>
             <li className="px-4">
               <Link to="/contact">Contact Us</Link>
             </li>
             <li className="px-4">
               <Link to="/grocery">Grocery</Link>
             </li>
             <li className="px-4 font-bold text-xl">
               <Link to="/cart">Cart</Link>
             </li>
             <button
               className="login"
               onClick={() => {
                 btnNameReact === "Login"
                   ? setBtnNameReact("Logout")
                   : setBtnNameReact("Login");
               }}
             >
               {btnNameReact}
             </button>
   
             <li className="px-4 ">Hello</li>
           </ul>
         </div>
       </div>
     );
   };
   
   export default Header;   