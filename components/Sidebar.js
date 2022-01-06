import Link from "next/link";
import { AiOutlineHome, AiOutlineProject, AiOutlineFile } from "react-icons/ai"
import { MdOutlineSchool} from "react-icons/md"
import { GiTie, GiSkills } from "react-icons/gi"

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
            <Link href="/experience"> 
                <a>
                    <SideBarIcon icon = {<GiTie size="32"/>}    text = "Experience"/>
                </a>
            </Link>
            <Link href="/skills"> 
                <a>
                    <SideBarIcon icon = {<GiSkills size="32"/>}    text = "Skills"/>
                </a>
            </Link>
            <Link href="/papers"> 
                <a>
                    <SideBarIcon icon = {<MdOutlineSchool size="32"/>}    text = "Papers"/>
                </a>
            </Link>
            <Link href="/contact"> 
                <a>
                    <SideBarIcon icon = {<AiOutlineFile size="32"/>}    text = "Contact Me"/>
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