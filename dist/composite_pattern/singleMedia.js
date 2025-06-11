"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleMedia = void 0;
class singleMedia {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`Playing the song ${this.name}`);
    }
}
exports.singleMedia = singleMedia;
