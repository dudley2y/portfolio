
const HomeRedirectButton = ({Icon, text}) => {
    return(
        <div className = "redirect-button"> 
            {Icon}
            <div className = "redirect-text">
                <p>{text}</p>
            </div>

        </div>
    )
}

export default HomeRedirectButton;