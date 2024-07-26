import Product from '../Pages/ProductPages/Product';
import ProductDetail from '../Pages/ProductPages/ProductDetail';
import DetailsAssets from '../Components/DetailsAssetsComponents/DetailsAssets';

const productRoutes = [
  {
    path: '',
    element: Product,
  },
  {
    path: 'detail',
    element: ProductDetail,
  },
  {
    path: 'detail/:id',
    element: DetailsAssets,
  },
];

export default productRoutes;
