import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Feed from "./Feed.jsx";
import Drills from "./Drills.jsx";
import Achievements from "./Achievements.jsx";
import { AuthProvider } from "./AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./Profile.jsx";

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
  {
    path: "/profile",
    element: <PrivateRoute element={<Profile />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
