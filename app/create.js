"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDataToJson = addDataToJson;
exports.clearJSON = clearJSON;
exports.write = write;
var fs = require("node:fs");
var readFunctions = require("./read.js");
function clearJSON() {
    try {
        fs.writeFileSync('./characters.json', '');
    }
    catch (err) {
        throw err;
    }
    // Antes eu tava usando o writeFile() e funcionou da primeira vez, mas depois ele parou de 'apagar' o arquivo JSON. Troquei pra writeFileSync() e deu bom, me pergunto o porquê tho...
}
function write(toWrite) {
    try {
        fs.writeFileSync('./characters.json', toWrite);
    }
    catch (err) {
        throw err;
    }
}
function addDataToJson(userInputParsedData) {
    var existingData = readFunctions.readAll(false);
    existingData.push(userInputParsedData);
    var updatedJson = JSON.stringify(existingData, null, 2);
    write(updatedJson);
}
