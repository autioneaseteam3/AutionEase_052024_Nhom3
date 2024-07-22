import { Route, Routes } from 'react-router-dom';
import './App.css';
import { adminRoutes, homeRoutes, productRoutes } from "./Routes/Index";
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import DefaultLayout from './Layout/DefaultLayout/Index';
import AdminLayout from './Layout/AdminLayout/Index';
import purchasedListRoutes from './Routes/PurchasedListRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<AdminLayout />}>
          {adminRoutes.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/purchased-list' element={<DefaultLayout />}>
          {purchasedListRoutes.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/product' element={<DefaultLayout />}>
          {productRoutes.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/' element={<DefaultLayout />}>
          {homeRoutes.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
