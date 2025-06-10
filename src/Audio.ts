import Media from "./mediainterface";

export class Audio implements Media{
    
    play(name: string): string {
        return `This is Audio  its name is ${name}`
    }
}
