import ListAssetPage from "../Pages/AdminPages/Asset/ListAssetPage";
import ListAssetTypePage from "../Pages/AdminPages/AssetType/ListAssetTypePage";
import ListAuctionPage from "../Pages/AdminPages/Auction/ListAuctionPage";
import ListEventPage from "../Pages/AdminPages/Event/ListEventPage";
import ListNewPage from "../Pages/AdminPages/News/ListNewPage";
import ListTaxPage from "../Pages/AdminPages/Tax/ListTaxPage";
import AdminReportPage from "../Pages/AdminPages/ReportPage";
import ListWareHouse from "../Pages/AdminPages/WareHouse/ListWareHousePage";
import ListSellerPage from "../Pages/AdminPages/Suplier/ListSellerPage";
import ListEmployeePage from "../Pages/AdminPages/Staff/ListEmployeePage";
import ListAuctionRequestPage from "../Pages/AdminPages/Requests/ListAuctionRequestPage";
import ListBillsPage from "../Pages/AdminPages/Bill/ListBillsPage";

const adminRoutes=[
    {
        path: "",
        element: AdminReportPage
    },
    {
        path:"Staffs",
        element: ListEmployeePage
    },
    {
        path:"Supliers",
        element: ListSellerPage
    },
    {
        path:"News",
        element: ListNewPage
    },
    {
        path:"Events",
        element: ListEventPage
    },
    {
        path:"Taxs",
        element: ListTaxPage
    },
    {
        path:"Assetstype",
        element: ListAssetTypePage
    },
    {
        path:"Assets",
        element: ListAssetPage
    },
    {
        path:"WareHouses",
        element: ListWareHouse
    },
    {
        path:"Autions",
        element: ListAuctionPage
    },
    {
        path:"Requests",
        element: ListAuctionRequestPage
    },
    {
        path:"Bills",
        element: ListBillsPage
    },
]

export default adminRoutes;