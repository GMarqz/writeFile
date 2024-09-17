const fs = require('fs');
const userInput = require('./userInput');

// fs.writeFileSync('./characters.json', 'Este é o primeiro character.', (err) => {
//     if (err) throw err;
//     console.log('File created.')
// } )

function clearJSON() {
    fs.writeFileSync('./characters.json', '', (err) => {
        if(err) throw err;
    })
    // Antes eu tava usando o writeFile() e funcionou da primeira vez, mas depois ele parou de 'apagar' o arquivo JSON. Troquei pra writeFileSync() e deu bom, me pergunto o porquê tho...
}

const mualani = {
    "id": 89,
    "name": "Mualani",
    "talents": {
        "normalAtk": 1,
        "elementalSkill": 1,
        "elementalBurst": 1,
        "type": "Contention",
        "weeklyBossMaterial": "Unknown"
    },
    "pic": "...",
    "description": "Well, this is a test but my current Mualani looks exactly like this. Lv50/60 BTW."

}

const kachina = {
    "id": 120,
    "name": "Kachina",
    "talents": {
        "normalAtk": 1,
        "elementalSkill": 1,
        "elementalBurst": 1,
        "type": "?",
        "weeklyBossMaterial": "Unkown"
    },
    "pic": "...",
    "description": "She's funny, I wanna build her!"
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

// addDataToJson(mualani)

// const results = userInput.userInput();

module.exports = {
    addDataToJson: addDataToJson
}