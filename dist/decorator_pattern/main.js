"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseMedia_1 = require("./baseMedia");
const withsubs_1 = require("./withsubs");
const withSpeed_1 = require("./withSpeed");
const basemedia = new baseMedia_1.baseMedia("Song1");
const withsubs = new withsubs_1.withSubs(basemedia, "Ek do Teen");
const speed = new withSpeed_1.withspeed(withsubs, 44);
speed.play();
