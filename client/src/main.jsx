import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Feed from "./Feed.jsx";
import Drills from "./Drills.jsx";
import Achievements from "./Achievements.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/drills",
    element: <Drills />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
