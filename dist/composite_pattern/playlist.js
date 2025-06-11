"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlist = void 0;
class playlist {
    constructor() {
        this.medias = [];
    }
    add(item) {
        this.medias.push(item);
    }
    play() {
        console.log("This playlist contains below songs");
        this.medias.map((media) => { media.play(); });
    }
}
exports.playlist = playlist;
