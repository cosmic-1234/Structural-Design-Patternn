"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseMedia = void 0;
class baseMedia {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`Playing a song with name ${this.name}`);
        return "base worked Sucessfully";
    }
}
exports.baseMedia = baseMedia;
