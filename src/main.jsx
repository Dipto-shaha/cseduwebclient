import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import LoginPage from "./Login";
import Context from "./Admin/Context";
import Dashboard from "./Admin/Dashboard";
import NewsTable from "./Admin/NewsTable";
import NewsForm from "./Admin/NewsForm";
import CreateEventForm from "./Admin/Create Event";
import Home from "./Home";
import About from "./About";
import Academic from "./Academic";
import EventsTable from "./Admin/EventsTable";
import AddUser from "./Admin/AddUser";
import ForgetPassword from "./ForgetPassword";
import News from "./News";
import Events from "./Events";
import Club from "./Club";
import Contact from "./Contact";
import UsersTable from "./Admin/UsersTable";
import NewsDetails from "./NewsDetails";
import EventsDetails from "./EventsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/academic",
        element: <Academic></Academic>,
      },
      {
        path:"/news",
        element:<News></News>
      },
      {
        path:"/events",
        element:<Events></Events>
      },
      {
        path:"/club",
        element:<Club></Club>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/news/:id',
        element:<NewsDetails></NewsDetails>
      },
      {
        path:'/events/:id',
        element:<EventsDetails></EventsDetails>
      }
    ],
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
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
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
        path: "/dashboard/event",
        element: <EventsTable></EventsTable>,
      },
      {
        path: "/dashboard/addevents",
        element: <CreateEventForm></CreateEventForm>,
      },
      {
        path: "/dashboard/addnews",
        element: <NewsForm></NewsForm>,
      },
      {
        path: "/dashboard/adduser",
        element: <AddUser></AddUser>,
      },
      {
        path:"/dashboard/users",
        element:<UsersTable></UsersTable>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
