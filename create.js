const fs = require('fs');
const {readAll} = require('./read');

function clearJSON() {
    fs.writeFileSync('./characters.json', '', (err) => {
        if(err) throw err;
    })
    // Antes eu tava usando o writeFile() e funcionou da primeira vez, mas depois ele parou de 'apagar' o arquivo JSON. Troquei pra writeFileSync() e deu bom, me pergunto o porquê tho...
}

function write(toWrite) {
    fs.writeFileSync('./characters.json', toWrite, (err) => {
        if (err) throw err;
    });
}

function addDataToJson(userInputParsedData) {
    existingData = readAll(false);
    existingData.push(userInputParsedData);

    const updatedJson = JSON.stringify(existingData, null, 2);
    write(updatedJson);
}

module.exports = {
    addDataToJson: addDataToJson,
    clearJSON: clearJSON,
    write: write
}