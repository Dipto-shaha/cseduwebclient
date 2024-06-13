import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import LoginPage from "./Admin/Login";
import Context from "./Admin/Context";
import Dashboard from "./Admin/Dashboard";
import NewsTable from "./Admin/NewsTable";
import NewsForm from "./Admin/NewsForm";
import CreateEventForm from "./Admin/Create Event";
import Home from "./Home";
import About from "./About";
import Academic from "./Academic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },{
        path:"/academic",
        element:<Academic></Academic>
      
      }
    ]
  },
  {
    path: "/login",
    element: (
      <Context>
        <LoginPage></LoginPage>
      </Context>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/news",
        element: <NewsTable></NewsTable>,
      },
      {
        path:"/dashboard/event",
        element:<CreateEventForm></CreateEventForm>
      },
      {
        path:"/dashboard/addnews",
        element:<NewsForm></NewsForm>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
