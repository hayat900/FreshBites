import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child">
        <h1>I am H1</h1>
    </div>
</div>    
*/  
/*const heading = React.createElement("div", //React object is ceeated
    {id:"parent"}, 
    React.createElement("div",
    {id:"child"},
    [
    React.createElement("h1", {},"I am H1"),
    React.createElement("h2", {},"I am H2")
    ]
    )
);*/
    /*const Titleheading = ()=>(
    <h1 id="Heading">Hello From JSX</h1>
    )
    const HeadingComponent =()=>(
       
        <div> {Titleheading()}
        <Titleheading/>
        <Titleheading></Titleheading>
        <h2>Hello from functional component</h2>
        </div>
    )*/
   const Header=()=>(
    <div className="header">
        <div>
            <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
   );
   const Applayout=()=>(
    <div className="app"><Header/></div>
   )
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Applayout/>);// it converts that object into html element
