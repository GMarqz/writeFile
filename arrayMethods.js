const characters = require('./characters.json');
const readline = require('node:readline');

// const newId = '89'

// console.log(Object.keys(characters[0]))

// characters.forEach(character => {
//     // if(character.id === newId) {
//     //     console.log('This id already exist.')
//     // }
//     console.log(character.id)
// })

///Tentei fazer o if ali de cima funcionar, mas sem sucesso. Lembrando que character.id pode ser acessado, só preciso dar um jeito de manipulá-lo.

// console.log(...characters) esse console.log aqui retorna todos os personagens e seus dados pois estamos desestruturando o array do json.

function readByName(obj) {
    console.log(obj['name'])
}

readByName(characters[0])