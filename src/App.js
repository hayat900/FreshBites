import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body.js"
import Header from "./components/Header.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { lazy } from "react";
import RestaurantMenu from "./components/RestaurantMenu.js";
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
  

  const Grocery = lazy(() => import("./components/Grocery"));
  const About = lazy(() => import("./components/About"));
   const Applayout=()=>(
    <div className="app">
        <Header/>
        <Outlet/>
        </div>

   );

   const appRouter = createBrowserRouter([
    {
      element: <Applayout />,
      children:[
          {
            path:"/",
            element:<Body/>,
          },
          {
            path: "/about",
            element: <Suspense fallback={<h1>I am going to grocery</h1>}><About/></Suspense>,
          },
          {
              path:"/contact",
              element:<Contact/>,
          },
          {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,
          },
          {
            path:"/grocery",
            element:<Suspense fallback={<h1>I am going to grocery</h1>}><Grocery/></Suspense>,
          }
      ],
      errorElement:<Error/>
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);
