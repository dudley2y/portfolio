import ProjectBoard from "../components/ProjectBoard"
import { AiOutlineStock, AiOutlineSmile} from "react-icons/ai"
import { IoIosFitness} from "react-icons/io"
import { MdLibraryMusic} from "react-icons/md"
import { RiDiscordLine } from 'react-icons/ri'
import { BiExtension } from 'react-icons/bi'
import { GiConwayLifeGlider} from 'react-icons/gi'
import { FaMoneyCheck } from 'react-icons/fa'

export default function Project() {

    const imageSize = "130"

    return (
      <div className = "page">
          <div className = "project-board-container">
            <ProjectBoard  display = {<IoIosFitness size = {imageSize} />} name = "My Fitness Project" description = "something about fitness"/>
            <ProjectBoard  display = {<MdLibraryMusic size = {imageSize} />} name = "My Playlist" description = "something about music"/>
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display = {<AiOutlineStock size = {imageSize} />} name = "Stock jock" description = "something about stocks"/>
            <ProjectBoard  display = {<RiDiscordLine size = {imageSize} />} name = "My Discord Bot" description = "something about discord"/>
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display ={<BiExtension size = {imageSize} />} name = "Spongebob Text Transformer" description = "something about an extension"/>
            <ProjectBoard  display ={<GiConwayLifeGlider size = {imageSize} />} name = "Conway's Game of Life" description = "something about an conways's game of life"/>
          </div>
          <div className = "project-board-container"> 
            <ProjectBoard  display ={<FaMoneyCheck size = {imageSize}/>} name = "JAAM" description = "something about JAAM"/>
            <ProjectBoard  display ={<AiOutlineSmile size = {imageSize}/>} name = "Come back Soon!" description = "Updated Regularly! FYI,This isn't a back button bc generics custom component :P"/>

          </div>
      </div>
    )
  }
  