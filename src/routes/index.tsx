/** @format */

import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Revenue from "@/pages/Revenue";
import Layout from "@/pages/Layout";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "/",
          element: <Revenue />,
        },
        {
          path: "*",
          element: <Navigate to='/' />,
        },
      ],
    },
  ]);
  return { routes };
};

export default Routes;
