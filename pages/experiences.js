import Experience from "../components/Experience"

export default function Experiences() {
    return(
        <div className = "page">
            <p className = "section-title">Experience</p>
            <div className ="pt-10">
                <Experience name = "Undergraduate Teaching Assistant - UIC" 
                            line1 = "Taught Systems Engineering concepts to 200+ students"
                            line2 = "Led 5 in person Labs discussing each weeks topic"
                            line3 = "Conducted office hours explaining class/concepts"
                />
            </div>
            

        </div>
    )
}