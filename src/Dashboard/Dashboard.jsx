import {   FaHome, FaSearch,  FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    
    return (
        <div className="flex p-6">
            <div className="w-64 min  bg-cyan-500 ">
                <ul className="menu p-4">
                
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/dashboard/list"><FaWallet></FaWallet>Add List</NavLink></li>
                    <li><NavLink to="/dashboard/mylist"><FaWallet></FaWallet>Your List</NavLink></li>
                    
                    
                      
                    
                        <div className="divider"></div> 

                        <li>
                       
                       <NavLink to={'/'}><FaHome></FaHome> Home</NavLink> </li>
                       <li>
                       
                       <NavLink to={'/review'}><FaSearch></FaSearch>Review</NavLink> </li>
                      
                      
                </ul>

            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;