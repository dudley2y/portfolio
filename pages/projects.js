import ProjectBoard from "../components/ProjectBoard"
import { AiOutlineStock} from "react-icons/ai"
import { IoIosFitness} from "react-icons/io"
import { MdLibraryMusic} from "react-icons/md"
import { RiDiscordLine } from 'react-icons/ri'

export default function Project() {
    return (
      <div className = "page  ">
        <h1>Project page</h1>
          <ProjectBoard  display = {<IoIosFitness size = "150"/>} name = "My Fitness Project" description = "something about fitness"/>
          <ProjectBoard  display = {<MdLibraryMusic size = "150"/>} name = "My Playlist" description = "something about music"/>
          <ProjectBoard  display = {<AiOutlineStock size = "150"/>} name = "Stock jock" description = "something about stocks"/>
          <ProjectBoard  display = {<RiDiscordLine size = "150"/>} name = "My Discord Bot" description = "something about discord"/>
      </div>
  
    )
  }
  