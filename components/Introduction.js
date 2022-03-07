import Image from 'next/image'

const Introduction = () => {
    
    return( 
        <div className ="intro-board"> 
            <div className = "about-me"> 
                <p className = "text-xl">Developer:</p>
                <p className = "text-4xl">Joshua Dudley</p>
                <div className = "intro-speech ">
                    <p>I am a third year Computer Science student at the  <a href= "https://www.uic.edu/"><b>University of Illinois at Chicago </b></a> 
                    with an interest in developing high performance applications with an emphasis on scalability and security. I've been developing websites
                        since 2018 learning web technologies such as React , Node.js/Express, Next.js. More recently picking up DevOps technologies such as 
                        Docker, Kubernetes, Github Actions to host my applications on Heroku. I'm looking for Summer Software Developer Internships or Fall Co-ops! 
                     </p>             
                </div>
            </div>
            
        </div>
    )
}

export default Introduction;