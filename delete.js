const characters = require('./characters.json');
const { clearJSON } = require('./create');
const { getCharacterName, readAll } = require('./read');
const readline = require('node:readline/promises');
const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function deleteCharacter() {
    let dado = [];
    const currentCharacters = fs.readFileSync('./characters.json', 'utf-8');
    // dado = [...currentCharacters];
    // const parsed = JSON.parse(characters);
    console.log(typeof characters);
    // const parsedCurrentCharacters = [...currentCharacters];
    // currentCharacters.forEach((character) => {
    //     console.log(character)
    // });
}

/////////////////////////////////////////IMPORTANTE!!!!!!!!!/////////////////////////////////////////////
//OS DADOS LIDOS DO JSON ESTÃO SENDO CONSIDERADOS STRINGS, ATÉ MESMO OS COLCHETES SÃO CONSIDERADOS STRINGS, O QUE SIGNIFICA QUE MÉTODOS ARRAY NÃO FUNCIONAM (EXCETO MÉTODOS DE ARRAYS QUE FUNCIONAM EM STRINGS)
//ESSE PROVAVELMENTE É A FONTE DOS PROBLEMAS, NÃO ERA PRA SER RETORNADO UMA GRANDE STRING MAS SIM UM ARRAY.

// deleteCharacter();

// console.log(Object.hasOwn(characters, "1"))
// // console.log(typeof characters[1].name) //string
// // console.log(typeof characters[1]) //object
// // console.log(typeof characters) //object

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
const readParsed = JSON.parse(read)
// console.log(readParsed)
const readArray = [...readParsed, mualaniForTests]
// readArray[19].id = 777
// console.log(readArray[19])

// for(let i = 0; i < readArray.length; i++) {
//     console.log(readArray[i].id)

// }
readArray.filter((character) => {
    console.log(character.id === mualaniForTests.id)
    const idIdentificado = character.id === mualaniForTests.id;
    if(idIdentificado != undefined) {
        console.log(idIdentificado)
        const toRemove = readArray.indexOf(idIdentificado)
        readArray.splice(toRemove, 1)
        console.log(readArray)
        return readArray;
    }
})