"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var main = function () {
    var firststring = (0, readline_sync_1.question)("What is your name : ");
    console.log(firststring);
};
main();
