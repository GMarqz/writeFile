const fs = require('fs');

function readAll(){
    const dataRead = fs.readFileSync('./characters.json', 'utf8');
    console.log(dataRead);
}

function readByName(data, value) {
    return data.find((character) => character['name'] === value);
}

async function getCharacterName(rl, data) {

  const provideCharacterName = await rl.question(`Enter the characters name: `);
  const characterFound = readByName(data, provideCharacterName);
  console.log(characterFound);
  // rl.close();
  return characterFound;
}

async function read(rl, data) {

  const chooseReadOption = await rl.question(`Choose an option below: \n[1] - See all characters data \n[2] - See character data by name \n`);

  if (chooseReadOption === '1') {
    readAll()
    rl.close();
  } else if (chooseReadOption === '2') {
    await getCharacterName(rl, data)
  } else {
    console.log('Invalid option. Please type 1 or 2')
    rl.close();
  }
}

module.exports = {
  read: read,
  getCharacterName: getCharacterName
}