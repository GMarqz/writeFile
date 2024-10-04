const fs = require('fs');
const characters = require('./characters.json');

function readAll(){
    const dataRead = fs.readFileSync('./characters.json', 'utf8');
    console.log(dataRead);
}

function readByName(data, value) {
    return data.find((character) => character['name'] === value);
}

function getCharacterName(rl) {
    rl.question(`Enter the characters name: `, characterName => {
        const characterFound = readByName(characters, characterName);
        console.log(characterFound);
        rl.close();
    })
}

function read(rl) {
  rl.question(`Choose an option below: \n[1] - See all characters data \n[2] - See character data by name \n`, option => {
    if(option === '1') {
      readAll()
      rl.close();
    } else if (option === '2') {
      getCharacterName(rl)
    } else {
      console.log('Invalid option. Please type 1 or 2')
      rl.close();
    }
  });
}

module.exports = {
  read: read
}