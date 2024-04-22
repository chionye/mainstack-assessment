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
          element: <Navigate to='/revenue' />,
        },
        {
          path: "/revenue",
          element: <Revenue />,
        },
      ],
    },
  ]);
  return { routes };
};

export default Routes;
