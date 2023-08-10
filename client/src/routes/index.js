import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import FetchData from "../components/FetchData";

const authProtectedRoutes = [
  { exact: true, path: "/", component: (props) => <Home {...props} /> },

  // this route should be at the end of all other routes
  {
    exact: true,
    path: "/business",
    component: ({ cat = "business" }) => <FetchData cat={cat} />,
  },
  {
    exact: true,
    path: "/technology",
    component: ({ cat = "technology" }) => <FetchData cat={cat} />,
  },
  {
    exact: true,
    path: "/politics",
    component: ({ cat = "politics" }) => <FetchData cat={cat} />,
  },
  {
    exact: true,
    path: "/sports",
    component: ({ cat = "sports" }) => <FetchData cat={cat} />,
  },
  {
    exact: true,
    path: "/health",
    component: ({ cat = "health" }) => <FetchData cat={cat} />,
  },
];

const publicRoutes = [
  { exact: true, path: "/login", component: (props) => <Login {...props} /> },
  { exact: true, path: "/signup", component: (props) => <Signup {...props} /> },
];

export { authProtectedRoutes, publicRoutes };
