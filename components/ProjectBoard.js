

const ProjectBoard = ({display, name, description}) => {
    return( 
        <div className = "project-board">
            {display}
            <div className = "project-board-text"> 
                <p className = "text-2xl">{name}</p>
                <p className = "pt-1 pl-2">{description}</p> 
            </div>
        </div>
    )
}

export default ProjectBoard; 