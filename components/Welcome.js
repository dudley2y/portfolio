


const Welcome = () => {

    const displayWelcome = () => {

        let hour = new Date().getHours();

        if( hour >= 6 && hour < 10){
            // morning
            return <p>Good Morning,</p>
        }
        else if(hour >=10 && hour <20){
            // nooon 
            return <p>Good Afternoon,</p>
        }
        else{
            // evening
            return <p>Good Evening,</p>
        }
    }
    

    return(
        <div className ="welcome"> 
            {displayWelcome()}
        </div>
    )
}

export default Welcome;