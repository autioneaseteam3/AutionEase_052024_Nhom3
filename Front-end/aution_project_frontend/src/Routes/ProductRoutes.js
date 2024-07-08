import Product from "../Pages/ProductPages/Product";
import ProductDetail from "../Pages/ProductPages/ProductDetail";

const productRoutes = [
    {
        path: "",
        element: Product
    },
    {
        path: "detail",
        element: ProductDetail
    },
    {
        path: "detail/:id",
        element: ProductDetail
    },
]


export default productRoutes;