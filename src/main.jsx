import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import DonationPage from './Components/DonationPage/DonationPage.jsx';
import DonatedList from './Components/Donated/DonatedList';
import StatisticsPage from './Components/Statistics/StatisticsPage';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/donate/:id",
        element: <DonationPage></DonationPage>,
      },

      {
        path: "/donation",
        element: <DonatedList></DonatedList>,
      },

      {
        path: "/statistics",
        element: <StatisticsPage></StatisticsPage>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
