
export default function Skills(){
    return(
        <div className = "page mb-10">
            <p className = "section-title">Skills</p>
            <div className = "flex pt-10 text-xl">
                <div className = "w-1/2 text-center ">
                    <p className = "text-xl"><b>Web Technologies:</b></p>
                    <p>React</p>
                    <p>Express</p>
                    <p>Next.js</p>
                    <p>Tailwind CSS</p>
                    <p>SQL</p>
                    <p>Firebase</p>
                </div>

                <div className = "w-1/2 text-center">
                    <p className = "text-xl"><b>Other Technologies</b></p>
                    <p>Flutter</p>
                    <p>Java for Android</p>
                    <p>C/C++</p>
                    <p>Python</p>
                    <p>Docker</p>
                    <p>Github Actions</p>
                </div>
            </div>
        </div>
    )
}