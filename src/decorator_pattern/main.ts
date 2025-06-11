import { baseMedia } from "./baseMedia";
import { withSubs } from "./withsubs";
import { withspeed } from "./withSpeed";

const basemedia=new baseMedia("Song1")
const withsubs=new withSubs(basemedia, "Ek do Teen")
const speed = new withspeed(withsubs, 44)
speed.play()
