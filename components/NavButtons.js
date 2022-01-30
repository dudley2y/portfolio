import HomeRedirectButton from "./NavButton";
import Link from "next/link"
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { GiTie, GiSkills } from "react-icons/gi"
import { RiFilePaperLine } from "react-icons/ri"
import { MdOutlineSchool} from "react-icons/md"


const NavButtons = () => {
    return(
        <div>
            <div className = "nav-button-container">
                { /* Projects */}
                <Link href = "/projects" >
                    <a className = "nav-button-wrapper"> 
                        <HomeRedirectButton Icon = {<AiOutlineProject size="64"/>} text = "Projects"/>
                    </a>
                </Link>
                { /* Experience */}
                <Link  href = "experience"  >
                    <a className = "nav-button-wrapper">
                        <HomeRedirectButton Icon = {<GiTie size = "64"/>} text = "Experience" /> 
                    </a>
                </Link>
                { /* Skills */}
                <Link  href = "skills"  >
                    <a className = "nav-button-wrapper">
                        <HomeRedirectButton Icon = {<GiSkills size = "64"/>}text = "Skills"/>
                    </a>
                </Link>
            </div>
            <div className = "nav-button-container" >
                { /* Resume */}
                <Link  href = "resume">
                    <a className = "nav-button-wrapper" >  
                        <HomeRedirectButton Icon = {<RiFilePaperLine size = "64"/>} text = "Resume"/>
                    </a>
                </Link>
                { /* Papers */}
                <Link  href = "papers"  >
                    <a className = "nav-button-wrapper">
                        <HomeRedirectButton Icon = {<MdOutlineSchool size = "64"/>} text = "Papers"/>
                    </a>
                </Link>
                { /* Contact Me */}
                <Link  href = "contact"  >
                    <a className = "nav-button-wrapper">
                        <HomeRedirectButton Icon = {<AiOutlineMail size = "64"/>} text = "Contact Me"/>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default NavButtons;