import { Outlet } from "react-router-dom";
import Footer from "../Home/Home/Home/Footer";
import Navbar from "../Home/Home/Home/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;