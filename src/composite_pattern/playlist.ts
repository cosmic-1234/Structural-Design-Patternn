import { mediaInterface } from "./mediaInterface";

export class playlist implements mediaInterface{
    medias:mediaInterface[]=[]
    add(item:mediaInterface):void{
        this.medias.push(item)
    }

    play(): void {
        console.log("This playlist contains below songs")
        this.medias.map((media)=>{media.play()})
    }
}