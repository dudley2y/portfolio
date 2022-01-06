
const Paper = ({name, description}) => {
    return(
        <div className = "paper">
            <h1 className = "text-3xl hover:font-bold">{name}</h1>
            <p className = "py-2">{description}</p>
            <br/>
            <p>Click to view PDF</p>
        </div>
    )
}

export default Paper