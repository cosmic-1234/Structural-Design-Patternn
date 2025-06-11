import Media from "./mediainterface";
import { youtube } from "./youtube";

export class Mediadapter implements Media{
   youtube1: youtube = new youtube()
play(name: string): string {
    return this.youtube1.Load(name)
}

}

