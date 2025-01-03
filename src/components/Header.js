import { useState } from "react";
const Header=()=>{
    const [btn, setbtn] = useState("login");
    return(
    <div className="header">
        <div>
            <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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