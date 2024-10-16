const fs = require('fs');

function readAll(consoleLogOrNot){
    const dataRead = fs.readFileSync('./characters.json', 'utf8');
    const readDataParsed = JSON.parse(dataRead);
    const readDataParsedArray = [...readDataParsed];
    if(consoleLogOrNot === true) {
      console.log(readDataParsedArray);
    } else if(consoleLogOrNot === false) {
      return readDataParsedArray;
    } else {
      console.log(`[ERROR] \nWhen calling 'readAll()' function, your parameter should be either true or false. \nYou got this error because you either forgot to inform your parameter or you entered an invalid parameter.`);
    }
}

function readByName(data, value) {
    return data.find((character) => character['name'] === value);
}

async function getCharacterName(rl, data) {
  const provideCharacterName = await rl.question(`Enter the characters name: `);
  const characterFound = readByName(data, provideCharacterName);
  console.log(characterFound);
  return characterFound;
}

async function read(rl, data) {

  const chooseReadOption = await rl.question(`Choose an option below: \n[1] - See all characters data \n[2] - See character data by name \n`);

  if (chooseReadOption === '1') {
    readAll(true)
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
  getCharacterName: getCharacterName,
  readAll: readAll
}