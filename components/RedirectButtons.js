import HomeRedirectButton from "./HomeRedirectButton";
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { GiTie, GiSkills } from "react-icons/gi"
import { RiFilePaperLine } from "react-icons/ri"
import { MdOutlineSchool} from "react-icons/md"


const RedirectButtons = () => {
    return(
        <div>
            <div className = "redirect-container">
                <HomeRedirectButton Icon = {<AiOutlineProject size="64"/>} text = "Projects"/>
                <HomeRedirectButton Icon = {<GiTie size = "64"/>} text = "Experience" />
                <HomeRedirectButton Icon = {<GiSkills size = "64"/>}text = "Skills"/>
            </div>
            <div className = "redirect-container">
                <HomeRedirectButton Icon = {<RiFilePaperLine size = "64"/>} text = "Resume"/>
                <HomeRedirectButton Icon = {<MdOutlineSchool size = "64"/>} text = "Papers"/>
                <HomeRedirectButton Icon = {<AiOutlineMail size = "64"/>} text = "Contact Me"/>
            </div>
        </div>
    )
}
export default RedirectButtons;