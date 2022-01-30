import NavButton from "./NavButton";
import Link from "next/link"
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { GiTie, GiSkills } from "react-icons/gi"
import { RiFilePaperLine } from "react-icons/ri"
import { MdOutlineSchool } from "react-icons/md"


const NavButtons = () => {
    return (
        <div>
            <div className="nav-button-container">
                { /* Projects */}
                <div className="nav-button-wrapper">
                    <NavButton Icon={<AiOutlineProject size="64" />} text="Projects" />
                </div>
                { /* Experience */}
                <div className="nav-button-wrapper">
                    <NavButton Icon={<GiTie size="64" />} text="Experience" />
                </div>

                { /* Skills */}
                <div className="nav-button-wrapper">
                    <NavButton Icon={<GiSkills size="64" />} text="Skills" />
                </div>

            </div>
            <div className="nav-button-container" >
                { /* Resume */}
                <div className="nav-button-wrapper">

                    <NavButton Icon={<RiFilePaperLine size="64" />} text="Resume" />
                </div>

                { /* Papers */}
                <div className="nav-button-wrapper">

                    <NavButton Icon={<MdOutlineSchool size="64" />} text="Papers" />
                </div>

                { /* Contact Me */}
                <div className="nav-button-wrapper">

                    <NavButton Icon={<AiOutlineMail size="64" />} text="Contact" />
                </div>

            </div>
        </div>
    )
}
export default NavButtons;