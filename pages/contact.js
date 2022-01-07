import {  AiOutlineMail } from 'react-icons/ai'

export default function Contact(){
    return(
        <div className = "page h-full">
            <h1 className ="text-center text-4xl font-extrabold">Lets Connect!</h1>
            <div className = "flex">
                <div className = "flex justify-center items-center w-1/2">
                    <AiOutlineMail size = "300"/>
                </div>

                <div className = "w-1/2 pt-20 text-black text-xl">             
                    <input placeholder = "Name" className = "block mb-10 rounded-3xl w-1/2 h-10 px-5" />
                    <input placeholder = "Email" className = "block mb-10 rounded-3xl w-1/2 h-10 px-5"  />
                    <input placeholder = "Subject" className = "block mb-10 rounded-3xl w-1/2 h-10 px-5" />
                    <textarea    placeholder = "Content" className = "block mb-10 rounded-3xl w-2/3 h-1/3 px-5"  />
                    <button className = "bg-green-900 text-white w-1/2 h-10 rounded-3xl ">Connect!</button>
                </div>
            </div>
        </div>
    )
}