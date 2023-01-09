import { createContext, useState } from "react"
import { API } from "../ArtistApi"

interface contextProps{
    nextMusic:any
    backMusic:any
    index:number
}
export  const Context=createContext<contextProps>({} as contextProps)
export default function DisplayMusicProvider({children}:any){
    const[index,setIndex]=useState(0)
    function nextMusic(){
        const maxList=API.length
        if(index==maxList-1){
            setIndex(0);return
        }
        else setIndex(index+1)
      }
    function backMusic(){
        const maxList=API.length
        if(index==0)return
        else setIndex(index-1)
      }
    return(
        <Context.Provider value={{index,nextMusic,backMusic}}>
            {children}
        </Context.Provider>
    )
}