import { baseMediaInterface } from "./baseMediaInterface";

export class withSubs implements baseMediaInterface{
    basemedia: baseMediaInterface
    subs:string
    constructor(media:baseMediaInterface, subs:string){
        this.basemedia=media
        this.subs=subs
    }
    play(): string {
        console.log(`The base media is ${this.basemedia.play()}`)
        console.log(`The subs for this media is ${this.subs}`)
        return "subs worked successfully"
    }
}