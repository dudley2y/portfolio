
const NavButton = ({Icon, text}) => {

    const scroll = () => {
        if(text == "Resume"){
            window.open("./Resume.pdf")
        }
        else{
            const element = document.getElementById(text);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

    }

    return(
        <div className = "nav-button" onClick = {scroll}> 
            {Icon}
            <div className = "nav-text">
                <p>{text}</p>
            </div>

        </div>
    )
}

export default NavButton;