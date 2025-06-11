"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mediadapter = void 0;
const youtube_1 = require("./youtube");
class Mediadapter {
    constructor() {
        this.youtube1 = new youtube_1.youtube();
    }
    play(name) {
        return this.youtube1.Load(name);
    }
}
exports.Mediadapter = Mediadapter;
