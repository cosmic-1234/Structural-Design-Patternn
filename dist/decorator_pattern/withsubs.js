"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSubs = void 0;
class withSubs {
    constructor(media, subs) {
        this.basemedia = media;
        this.subs = subs;
    }
    play() {
        console.log(`The base media is ${this.basemedia.play()}`);
        console.log(`The subs for this media is ${this.subs}`);
        return "subs worked successfully";
    }
}
exports.withSubs = withSubs;
