import { baseMediaInterface } from "./baseMediaInterface";
export class withspeed implements baseMediaInterface{
    basemedia: baseMediaInterface
    speed:number
    constructor(media:baseMediaInterface, speed:number){
        this.basemedia=media
        this.speed=speed
    }

    play(): string {
        console.log(`We are getting called from speed ${this.basemedia.play()}`)
        console.log(`the speed is ${this.speed}`)
        return "Speed worked sucessfully"
    }
}