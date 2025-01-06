import { useState, useRef, useContext } from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Layout = () => (
  console.log("layout is rendering"),
  <>
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
    
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path : "*",
          element : <div>404 not found</div>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
