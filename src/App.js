import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js"
import Header from "./components/Header.js";
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

    /* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
   

  // Restaurant card component: Image, name, cuisine
  


   const Applayout=()=>(
    <div className="app">
        <Header/>
        <Body/>
        </div>

   )
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Applayout/>);// it converts that object into html element
