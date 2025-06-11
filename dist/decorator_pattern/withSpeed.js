"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withspeed = void 0;
class withspeed {
    constructor(media, speed) {
        this.basemedia = media;
        this.speed = speed;
    }
    play() {
        console.log(`We are getting called from speed ${this.basemedia.play()}`);
        console.log(`the speed is ${this.speed}`);
        return "Speed worked sucessfully";
    }
}
exports.withspeed = withspeed;
