import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";

// Pages
import Practice from "./components/Pages/Practice.jsx";
import Result from "./components/Pages/Result.jsx";
import Signup from "./components/Pages/Signup.jsx";

// Footer pages (Pages1)
import Admin from "./components/Pages1/Admin.jsx";
import Hr from "./components/Pages1/Hr.jsx";
import Client from "./components/Pages1/Client.jsx";
import Mama from "./components/Pages1/Mama.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/practice", element: <Practice /> },
  { path: "/result", element: <Result /> },
  { path: "/signup", element: <Signup /> },

  // Footer links routes
  { path: "/admin", element: <Admin /> },
  { path: "/hr", element: <Hr /> },
  { path: "/client", element: <Client /> },
  { path: "/mama", element: <Mama /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
