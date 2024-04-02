import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/product",
          element:<Product/>
        },
        {
          path:"/service",
          element:<Service/>
        },
        {
          path:"/gallery",
          element:<Gallery/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
