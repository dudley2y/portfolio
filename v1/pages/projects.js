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
      <div className = "page" id = "Projects">
          <span><p className = "section-title">Projects</p><p className = "text-lg"> (Click for Github Repos)</p> </span>
          <div className = "project-board-container">
            <ProjectBoard  display = {<IoIosFitness size = {imageSize} />} name = "My Fitness Project (Flutter, Firebase)" description = "App where users can add/edit full workout plans. UI's to easily view a certain day's workout."
            githubUrl = "https://github.com/dudley2y/fitness-"/>
            <ProjectBoard  display = {<MdLibraryMusic size = {imageSize} />} name = "My Playlist (React, Express, sqlite3)" description = "Website that utilizes the Spotify API and Youtube API. Users can create playlists composed of spotify songs and youtube videos creating a ease of use crossplatform viewing experience."
            githubUrl = "https://github.com/dudley2y/CS484Final"/>
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display = {<AiOutlineStock size = {imageSize} />} 
            name = "Stock jock (Next.js, Firebase, Arduino)" 
            description = "Website so users can edit a portfolio of stocks to track. Arduino displays user's stocks and price on LCD display via our express server and the Alpha Vantage API."
            githubUrl = "https://github.com/albondad/stock-jock"
            />
            <ProjectBoard  display = {<RiDiscordLine size = {imageSize} />} 
            name = "My Discord Bot (Python3)"
             description = "Discord Bot initally designed to be a notification bot so a user can get notified to when another member they subscribed to joined a discord voice channel. The bot also has alarm clock functionalities to notify you after a certain period has passed."
             githubUrl = "https://github.com/dudley2y/discord-general-bot"
             />
          </div>
          <div className = "project-board-container">
            <ProjectBoard  display ={<BiExtension size = {imageSize} />} 
            name = "Spongebob Text Transformer (HTML, Javascript)" 
            description = "A chrome extension where one can input text, on submission the extension will output the input text in alternating lowercase/capitalcase letters. The extension will auto copy the output to your clipboard."
            githubUrl = "https://github.com/dudley2y/upperCaseLetterTransformation"
            />
            <ProjectBoard  display ={<GiConwayLifeGlider size = {imageSize} />} 
            name = "Conway's Game of Life (C++)" 
            description = "Created a command line interface to run Conway's Game of Life with inputs width, height, and inital cells alive. Game UI that appears fixed in terminal. Auto-detection when the `Game` is over."
            githubUrl = "https://github.com/dudley2y/conways_game_of_life"                              
            />
          </div>
          <div className = "project-board-container"> 
            <ProjectBoard  display ={<FaMoneyCheck size = {imageSize}/>} name = "JAAM (HTML, JS)" description = "An attempt to virtualize debit/credit cards via an Extension. We implemented the Luhn algorithim to create a valid card number given a random seed. The extension allowed users to create/view a valid 'Virtual' card given the algorithm's output."
                                                                          githubUrl = "https://github.com/dudley2y/JAAM"/>
            <ProjectBoard  display ={<AiOutlineSmile size = {imageSize}/>} name = "Come back Soon!" description = ""/>

          </div>
      </div>
    )
  }
  