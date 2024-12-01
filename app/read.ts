import * as fs from 'node:fs';
import { select, Separator, input } from '../node_modules/@inquirer/prompts/dist/commonjs/index.js'; 
import returnAllCharactersWithThisTalentType from './talentType.js';

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

export function readByName(data, value) {
    return data.find((character) => character['name'] === value);
}

async function getCharacterName(data) {
  const provideCharacterName = await input({ message: 'Enter the characters name: '});
  const characterFound = readByName(data, provideCharacterName);
  console.log(characterFound);
  return characterFound;
}

async function read() {
  const chooseReadOption = await select({
    message: 'Select a package manager',
    choices: [
      {
        name: 'Check all characters data',
        value: 'first',
        description: 'Check all characters data',
      },
      {
        name: 'Check character by name',
        value: 'second',
        description: 'Check character by name',
      },
  
      {
        name: 'Check characters by talent type',
        value: 'third',
        description: 'Check characters by talent type',
      },
      new Separator(),
      {
        name: 'fourth',
        value: 'fourth',
        disabled: 'Check characters by weekly boos material (coming soon)',
      },
    ],
  });

  if (chooseReadOption === 'first') {
    readAll(true)
  } else if (chooseReadOption === 'second') {
    await getCharacterName(readAll(false));
  } else if (chooseReadOption === 'third') {
    // const charactersData = readAll(false);
    await returnAllCharactersWithThisTalentType(input, readAll(false));
  } else {
    console.log('Invalid option. Please type an option between 1 and 3')
  }
}

export { readAll, read, getCharacterName };