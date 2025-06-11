import { mediaInterface } from "./mediaInterface";
export class singleMedia implements mediaInterface{
    name:string
    constructor(name:string){
        this.name=name
    }
    play(): void {
        console.log(`Playing the song ${this.name}`)
    }
}