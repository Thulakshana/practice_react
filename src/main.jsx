import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from "./App.jsx";
import Practice from "./components/Pages/Practice.jsx";
import Result from "./components/Pages/Result.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
