import {  AiOutlineMail } from 'react-icons/ai'

export default function Contact(){
    return(
        <div className = "page h-full bg-slate-500" id = "Contact">
            <h1 className ="text-center text-4xl font-extrabold">Lets Connect!</h1>
            <div className = "flex">
                <div className = "flex justify-center items-center w-1/2">
                    <AiOutlineMail size = "300"/>
                </div>

                <div className = "w-1/2 pt-20 text-black text-xl">             
                    {/* <input placeholder = "Name" className = "contact-input" />
                    <input placeholder = "Email" className = "contact-input"  />
                    <input placeholder = "Subject" className = "contact-input" />
                    <textarea    placeholder = "Content" className = "contact-message" />
                    <button className = "contact-button">Connect!</button> */}
                    <h1><b>Feature in Progress...</b></h1>
                    <h2>Feel free to email me at dudley.joshua789@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}