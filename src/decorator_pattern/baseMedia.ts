import { baseMediaInterface } from "./baseMediaInterface";
export class baseMedia implements baseMediaInterface{
    name: string
    constructor(name:string){
        this.name=name;
    }
    play(): string {
        console.log(`Playing a song with name ${this.name}`)
        return "base worked Sucessfully"
    }
}