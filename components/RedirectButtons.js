import HomeRedirectButton from "./HomeRedirectButton";
import Link from "next/link"
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { GiTie, GiSkills } from "react-icons/gi"
import { RiFilePaperLine } from "react-icons/ri"
import { MdOutlineSchool} from "react-icons/md"


const RedirectButtons = () => {
    return(
        <div>
            <div className = "redirect-container">
                { /* Projects */}
                <Link href = "/projects" >
                    <a className = "redirect-wrapper"> 
                        <HomeRedirectButton Icon = {<AiOutlineProject size="64"/>} text = "Projects"/>
                    </a>
                </Link>
                { /* Experience */}
                <Link  href = "experience"  >
                    <a className = "redirect-wrapper">
                        <HomeRedirectButton Icon = {<GiTie size = "64"/>} text = "Experience" /> 
                    </a>
                </Link>
                { /* Skills */}
                <Link  href = "skills"  >
                    <a className = "redirect-wrapper">
                        <HomeRedirectButton Icon = {<GiSkills size = "64"/>}text = "Skills"/>
                    </a>
                </Link>
            </div>
            <div className = "redirect-container" >
                { /* Resume */}
                <Link  href = "resume">
                    <a className = "redirect-wrapper" >  
                        <HomeRedirectButton Icon = {<RiFilePaperLine size = "64"/>} text = "Resume"/>
                    </a>
                </Link>
                { /* Papers */}
                <Link  href = "papers"  >
                    <a className = "redirect-wrapper">
                        <HomeRedirectButton Icon = {<MdOutlineSchool size = "64"/>} text = "Papers"/>
                    </a>
                </Link>
                { /* Contact Me */}
                <Link  href = "contact"  >
                    <a className = "redirect-wrapper">
                        <HomeRedirectButton Icon = {<AiOutlineMail size = "64"/>} text = "Contact Me"/>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default RedirectButtons;