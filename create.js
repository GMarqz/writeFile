const fs = require('fs');
const userInput = require('./userInput');

function clearJSON() {
    fs.writeFileSync('./characters.json', '', (err) => {
        if(err) throw err;
    })
    // Antes eu tava usando o writeFile() e funcionou da primeira vez, mas depois ele parou de 'apagar' o arquivo JSON. Troquei pra writeFileSync() e deu bom, me pergunto o porquê tho...
}

// clearJSON();

const readData = fs.readFileSync('./characters.json', 'utf8');

function addDataToJson(json) {

    let existingData = [];
    existingData = JSON.parse(readData)
    existingData.push(json)

    const updatedJson = JSON.stringify(existingData, null, 2)

    fs.writeFileSync('./characters.json', updatedJson, (err) => {
        if (err) throw err;
        console.log(newData)
    })
}

module.exports = {
    addDataToJson: addDataToJson
}