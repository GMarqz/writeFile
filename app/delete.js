"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = removeByName;
var createFuntions = require("./create.js");
var readFunctions = require("./read.js");
function removeByName(characterName) {
    var readArray = readFunctions.readAll(false);
    var charactersName = [];
    for (var i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    // Dont forget to add a function asking if the user is sure about deleting the character, later.
    if (charactersName.includes(characterName)) {
        var indexOfGivenName = charactersName.indexOf(characterName);
        readArray.splice(indexOfGivenName, 1);
        console.log("".concat(characterName, " posicionado no index >").concat(indexOfGivenName, "< foi removido com sucesso!"));
        createFuntions.clearJSON();
        var returnArrayAsJson = JSON.stringify(__spreadArray([], readArray, true), null, 2);
        createFuntions.write(returnArrayAsJson);
    }
    else {
        console.log("Unexpected error.");
    }
}
