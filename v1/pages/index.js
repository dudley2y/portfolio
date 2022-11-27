import Introduction from "../components/Introduction";
import Welcome from "../components/Welcome";
import NavButtons from "../components/NavButtons";
import Project from "./projects";
import Papers from "./papers";
import Experience from "./experiences";
import Skills from "./skills";
import Contact from "./contact";

export default function Home() {
  return (
    <div className = "page">
      <Introduction/>
      <Welcome/>
      <NavButtons/>
      <Project/>
      <Experience/>
      <Papers/>  
      <Skills/>
      <Contact/>
    </div>

  )
}