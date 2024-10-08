import { createBrowserRouter } from "react-router-dom";
import PagesSetting from "../dashboard_pages/pages-profile/PagesSetting";
import PagesInvoice from "../dashboard_pages/pages_invoice/PagesInvoice";
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
        element: <PagesSetting></PagesSetting>,
      },
      {
        path: "/invoice",
        element: <PagesInvoice></PagesInvoice>,
      },
    ],
  },
]);

export default router;
