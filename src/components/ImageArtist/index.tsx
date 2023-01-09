interface props{
    image:string
}
export default function ImageArtist({image}:props){
    return(
        <div className="flex  h-auto top-[66px] md:w-[300px]  lg:w-[300px]" >
            <img className="rounded-lg h-auto w-[300px]" src={image}/>
        </div>
    )
}