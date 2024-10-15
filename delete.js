const characters = require('./characters.json');
const { clearJSON } = require('./create');
const { getCharacterName, readAll } = require('./read');
const readline = require('node:readline/promises');
const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const mualaniForTests =   {
    "id": 888,
    "name": "Mualani",
    "talents": {
      "normalAtk": 1,
      "elementalSkill": 1,
      "elementalBurst": 1,
      "type": "Contention",
      "weeklyBossMaterial": "Unknown"
    },
    "pic": "...",
    "description": "Well, this is a test and my current Mualani DOES NOT look exactly like this. Lv80 BTW."
}

const read = fs.readFileSync('./characters.json') ;
const readParsed = JSON.parse(read);
const readArray = [...readParsed, mualaniForTests];

function removeById(id) {
    let charactersId = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersId.push(readArray[i].id);
    }
    console.log(charactersId);
    if(charactersId.includes(id)) {
        const indexOfGivenId = charactersId.indexOf(id);
        readArray.splice(indexOfGivenId, 1);
        console.log(`${id} posicionado no index >${indexOfGivenId}< foi removido com sucesso!`);
        console.log(readArray)
    } else {
        console.log("Deu ruim!")
    }
} 

removeById(888);
