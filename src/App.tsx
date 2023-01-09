import { useContext, useState } from 'react'
import ButtonView from './components/ButtonsView'
import ImageArtist from './components/ImageArtist'
import { API } from './ArtistApi'
import { Context } from './context/context'

function App() {
  const {index} =useContext(Context)
  return (
    <div className='w-screen h-screen bg-bg-base flex flex-col  p-10  absolute items-center justify-center overflow-hidden '>
      <div className='flex  flex-col gap-10'>
        <div className='flex flex-col gap-6 md:flex-row'>
          <ImageArtist image={API[index].logo}/>
          <div className='self-stretch'>
            <h1 className='text-white font-bold text-[2.1rem]'>{API[index].musicName}</h1>
            <h1 className='text-slate-400 text-[1.6rem]'>{API[index].artistName}</h1>
          </div>
        </div>
       
        <ButtonView sound={API[index].sound}/>
      
       
      </div>
      
    </div>
  )
}

export default App
