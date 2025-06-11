import Media from "./mediainterface";

export class Video implements Media{
   
    play(name:string): string {
        return `This is Video  its name is ${name}`
    }
}

