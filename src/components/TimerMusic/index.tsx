import { useEffect, useState } from "react"

interface timeProps{
    currentTime:string
    duration:string
    progressBar:string
}
export default function TimerMusic({currentTime,duration,progressBar}:timeProps){
   
    return(
        <div className="flex flex-col w-full mt-3 ">
            <div className="w-full bg-gray-200 h-2 rounded-lg tall:invisible">
                <div style={{width:progressBar}}  className={`bg-blue-600 h-2  rounded-r-lg`} ></div>
            </div>
            <div className="w-full  flex items-center justify-between mt-2 tall:invisible">
                <h2 className="text-white">{currentTime}</h2>
                <h2 className="text-white">{duration}</h2>
            </div>
        </div>
    )
}