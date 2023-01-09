import { FastForward, PauseCircle, Play } from "phosphor-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/context";
import TimerMusic from "../TimerMusic";

interface displayMusicProps{
    sound:string
}
export default function ButtonView({sound}:displayMusicProps){
    const {index,nextMusic,backMusic} =useContext(Context)
    const [paused,setPaused]=useState(false)
    const audioRef=useRef<HTMLAudioElement | null>(null)
    const [duration,setDuration]=useState(0)
    const [currentTimeMusic,setCurrentTimeMusic]=useState("")
    const [progressBar,setProgressBar]=useState("0%")
    const [formatDurationMusic,setFormatMusic]=useState<string>("")
    function reloadMusic(type:"back" | "next"){
        if(audioRef){
            switch (type) {
                case "back":
                    backMusic()
                    setPaused(false)
                    audioRef.current?.load()
                    break;
                case "next":
                    nextMusic()
                    setPaused(false)
                    audioRef.current?.load()
                default:
                    break;
            }
            
        }
    }
    function updateCurrentTime(value:number){
        const current_time=parseInt( value.toPrecision(4))
        var min=Math.floor(current_time/60)
        var sec=current_time%60
        const time_=min+":"+sec
        setCurrentTimeMusic(time_)
        calculateProgressBar(value)
    }
    function formatDurationTime(){
        const duration_=parseFloat((duration/60).toPrecision(3))
        if(duration==0)return
        const time_split=duration_.toString().split(".")
        const min=(time_split[0]+":"+time_split[1])
        setFormatMusic(min)
    }
    function play(){
        if(audioRef) { 
            if(duration==0)setDuration(audioRef.current?.duration??0)
            setPaused(true)
            formatDurationTime()
            audioRef.current?.play()
            
        }
       
    }
    function stop(){
        if(audioRef) {
            setPaused(false)
            audioRef.current?.pause()
        }
    }
    function calculateProgressBar(currentValue:number){  
        const v1=currentValue*100
        const x=(Math.floor(v1/duration))+"%" 
        setProgressBar(x)  
    }
    useEffect(()=>{
        formatDurationTime()
        console.log("@")
    },[progressBar])
    return(
    <div className="flex flex-col w-full  p-2 ">
        <div  className="flex  w-full  p-2 items-center justify-between">
            <FastForward size={40} weight="fill" color="white" className="rotate-180 cursor-pointer"  onClick={()=>reloadMusic("back")}/> 
            {
             paused?(<PauseCircle size={40} weight="fill" color="white" className="cursor-pointer" onClick={()=>stop()} />):(<Play size={40} weight="fill" color="white" className="cursor-pointer" onClick={()=>play()}/>)
            }
            <FastForward size={40} weight="fill" color="white" className="cursor-pointer" onClick={()=>reloadMusic("next")}/> 
        </div>
      
       
       <TimerMusic progressBar={progressBar} duration={formatDurationMusic} currentTime={currentTimeMusic}/> 
       <audio   ref={audioRef} id="myAudio" onTimeUpdate={(e)=>{updateCurrentTime(e.currentTarget.currentTime)}}>
       <source  src={sound} type="audio/ogg"/>
       </audio>
    </div>
)}

