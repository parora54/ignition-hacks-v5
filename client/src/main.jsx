import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css';

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Feed from "./Feed.jsx";
import Drills from "./Drills.jsx";
import Achievements from "./Achievements.jsx";
import { AuthProvider } from "./AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./Profile.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Register from "./Register.jsx";
import Competition from "./Competition.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feed",
    element: <Feed />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feed/:id",
    element: <Competition />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/drills",
    element: <Drills />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/achievements",
    element: <PrivateRoute element={<Achievements />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<Profile />} />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Navbar />
      <div style={{ paddingTop: "6vh" }}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>
  </StrictMode>
);
