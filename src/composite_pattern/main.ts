import { mediaInterface } from "./mediaInterface";
import { singleMedia } from "./singleMedia";
import { playlist } from "./playlist";


const song1=new singleMedia("Blue eyes.mp3")
const song2=new singleMedia("BrownRang.mp3")
const song3=new singleMedia("Pani wala dance.mp3")

const playlist1 = new playlist()
playlist1.add(song1)
playlist1.add(song2)
playlist1.add(song3)
playlist1.play();
song1.play();