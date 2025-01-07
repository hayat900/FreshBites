import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btn, setbtn] = useState("login");
    return(
    <div className="header">
        <div>
            <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                <li>
                    <Link to="/about">About</Link>
                    </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                <li>
                <i className="fa-solid fa-cart-shopping"></i>
                </li>
                <li>
                    <button className="Login" onClick={()=>{
                        btn==="login"?setbtn("Logout"):setbtn("login");
                    }}>{btn}</button>
                </li>
            </ul>
        </div>
    </div>
   );
};
   export default Header;