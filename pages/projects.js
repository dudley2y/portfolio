import ProjectBoard from "../components/ProjectBoard"
import { AiOutlineStock, AiOutlineSmile} from "react-icons/ai"
import { IoIosFitness} from "react-icons/io"
import { MdLibraryMusic} from "react-icons/md"
import { RiDiscordLine } from 'react-icons/ri'
import { BiExtension } from 'react-icons/bi'
import { GiConwayLifeGlider} from 'react-icons/gi'
import { FaMoneyCheck } from 'react-icons/fa'

export default function Project() {
    return (
      <div className = "page">
          <div className = "project-board-container">
            <ProjectBoard  display = {<IoIosFitness size = "150"/>} name = "My Fitness Project" description = "something about fitness"/>
            <ProjectBoard  display = {<MdLibraryMusic size = "150"/>} name = "My Playlist" description = "something about music"/>
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display = {<AiOutlineStock size = "150"/>} name = "Stock jock" description = "something about stocks"/>
            <ProjectBoard  display = {<RiDiscordLine size = "150"/>} name = "My Discord Bot" description = "something about discord"/>
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display ={<BiExtension size = "150"/>} name = "Spongebob Text Transformer" description = "something about an extension"/>
            <ProjectBoard  display ={<GiConwayLifeGlider size = "150"/>} name = "Conway's Game of Life" description = "something about an conways's game of life"/>
          </div>
          <div className = "project-board-container"> 
            <ProjectBoard  display ={<FaMoneyCheck size = "150"/>} name = "JAAM" description = "something about JAAM"/>
            <ProjectBoard  display ={<AiOutlineSmile size = "150"/>} name = "Come back Soon!" description = "Updated Regularly!"/>

          </div>
      </div>
    )
  }
  