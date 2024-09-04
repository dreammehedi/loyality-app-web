import { createBrowserRouter } from "react-router-dom";
import PagesProfile from "../dashboard_pages/pages-profile/PagesProfile";
import PagesSetting from "../dashboard_pages/pages-profile/PagesSetting";
import Invoice from "../dashboard_pages/pages_invoice/PagesInvoice";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <PagesProfile></PagesProfile>,
      },
      {
        path: "/setting",
        element: <PagesSetting></PagesSetting>,
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
      },
    ],
  },
]);

export default router;
