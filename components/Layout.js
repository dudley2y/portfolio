import Head from "next/head";
import Meta from "./Meta";
import SideBar from "./Sidebar";

const Layout = ({children}) => {
    return ( 
        <div> 
            <Meta/>
            <div className = "flex">
                <SideBar/>
                <div className = "main-content">
                    {children}
                </div>
                
            </div>
        </div>
    )
}

export default Layout; 