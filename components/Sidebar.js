import Link from "next/link";
import { AiOutlineHome, AiOutlineProject, AiOutlineFile } from "react-icons/ai"

const SideBar = () => {
    return(
        <div className="sidebar">
            <Link href ="/">
                <a>
                    <SideBarIcon icon = {<AiOutlineHome size ="32"/>}   text = "Home"/>
                </a>
            </Link>
            <Link href="/projects">
                <a>
                    <SideBarIcon icon = {<AiOutlineProject size="32"/>} text = "Projects"/>
                </a>
                
            </Link>
            <Link href="/"> 
                <a>
                    <SideBarIcon icon = {<AiOutlineFile size="32"/>}    text = "Something"/>
                </a>
            </Link>
        </div>
    )
}


const SideBarIcon = ({ icon, text}) => (
    <div className="sidebar-icon">
        {icon}
        <h1 className ="sidebar-text">{text}</h1>
    </div>
  );

export default SideBar;