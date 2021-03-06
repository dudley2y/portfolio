import { BiWindows } from "react-icons/bi";


const ProjectBoard = ({display, name, description, githubUrl}) => {

    const redirect = () => {
        window.open(githubUrl,"_blank")
    }

    return( 
        <div className = "project-board" onClick = { redirect}>
            {display}
            <div className = "project-board-text"> 
                <p className = "text-2xl">{name}</p>
                <p className = "pt-1 pl-2">{description}</p> 
            </div>
            
        </div>
    )
}

export default ProjectBoard; 