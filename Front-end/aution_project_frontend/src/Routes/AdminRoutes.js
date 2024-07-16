import ListAutionPage from "../Pages/AdminPages/ListAutionPage";
import ListNewPage from "../Pages/AdminPages/ListNewPage";
import AdminReportPage from "../Pages/AdminPages/ReportPage";

const adminRoutes=[
    {
        path: "",
        element: AdminReportPage
    },
    {
        path:"News",
        element: ListNewPage
    },
    {
        path:"Aution",
        element: ListAutionPage
    }
]

export default adminRoutes;