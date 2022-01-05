import Image from 'next/image'

const Introduction = () => {
    
    return( 
        <div className ="intro-board"> 
            <div className = "profile-image">
                <Image 
                    layout="fixed"
                    src="/profile.jpg" 
                    alt="Picture of the author"
                    priority = {true}
                    width={250} 
                    height={250}
                />
            </div>
            <div className = "about-me"> 
                <p className = "text-xl">Developer:</p>
                <p className = "text-4xl">Joshua Dudley</p>
                <div className = "intro-speech">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Introduction;