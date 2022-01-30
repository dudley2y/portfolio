
const Experience = ({name, line1, line2, line3}) => {
    return(
        <div className = "paper">
            <h1 className = "text-3xl hover:font-bold">{name}</h1>
            <div className = "pl-10">
                <ul className = "list-disc">
                    <li >{line1}</li>
                    <li >{line2}</li>
                    <li >{line3}</li>
                </ul>
            </div>
            
            <br/>
        </div>
    )
}

export default Experience