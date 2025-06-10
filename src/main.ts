import { Audio } from "./Audio";
import { Video } from "./Video";
import { Mediadapter } from "./youtubeadapt";

const o1= new Audio()
const o2 = new Video()
const o3 = new Mediadapter()
console.log(o1.play("Alex"))
console.log(o2.play("Malex"))
console.log(o3.play("Galex"))


