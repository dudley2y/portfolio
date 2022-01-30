
const NavButton = ({Icon, text}) => {
    return(
        <div className = "nav-button"> 
            {Icon}
            <div className = "nav-text">
                <p>{text}</p>
            </div>

        </div>
    )
}

export default NavButton;