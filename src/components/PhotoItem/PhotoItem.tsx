import { Photo } from "@/types/Photo"

type PropsPhoto = {
    photo: Photo;
    onClick: ()=>void;
}

export const PhotoItem = ({photo, onClick}: PropsPhoto) =>{
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt='' className="w-full"/>
        </div>
    )
}