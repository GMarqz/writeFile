import fs from 'node:fs';
import { readAll } from './read.js';
import { PATH } from './app.js';

function clearJSON(fileToClear) {
    fs.writeFileSync(fileToClear, '', (err) => {
        if(err) throw err;
    })
    // Antes eu tava usando o writeFile() e funcionou da primeira vez, mas depois ele parou de 'apagar' o arquivo JSON. Troquei pra writeFileSync() e deu bom, me pergunto o porquê tho...
}

function write(toWrite, fileToWrite) {
    fs.writeFileSync(fileToWrite, toWrite, (err) => {
        if (err) throw err;
    });
}

function addDataToJson(userInputParsedData) {
    const existingData = readAll(false, PATH);
    existingData.push(userInputParsedData);

    const updatedJson = JSON.stringify(existingData, null, 2);
    write(updatedJson, PATH);
}

export { addDataToJson, clearJSON, write };
