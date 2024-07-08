import { Outlet } from "react-router-dom";
import NavBar from "../../Components/SharedComponents/NavBar";
import Footer from "../../Components/SharedComponents/Footer";

function DefaultLayout() {
    return ( 
        <div>
            <NavBar></NavBar>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
     );
}

export default DefaultLayout;