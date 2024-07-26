import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/SharedComponents/NavBar";
import Footer from "../../Components/SharedComponents/Footer";

function DefaultLayout() {
    const location=useLocation();
    const checkHome=location.pathname==="/" ? true : false;
    return ( 
        <div className={`${checkHome && 'h-screen'} flex flex-col`}>
            <NavBar></NavBar>
                <Outlet></Outlet>
            {
                !checkHome && 
                <Footer></Footer>
            }
        </div>
     );
}

export default DefaultLayout;