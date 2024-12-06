import fs from 'node:fs';
import { select, Separator, input } from '@inquirer/prompts';
import returnAllCharactersWithThisTalentType from './talentType.js';
import { calcTalentMaterialsForSpecificLevel, predictNecessaryMaterials } from './talentLevel.js';
import { PATH } from './app.js';


// Deixar o PATH vazio no github. SE o PATH for uma string vazia, criar o arquivo 'characters.json'
// Com o arquivo characters.json criado, PATH passa a ser o caminho do 'banco de dados'
// Não sei bem como fazer isso, mas talvez deixando a const 'path' em um arquivo txt e editá-lo após 'characters.json' for criado?

// export const PATH = '../characters.json';

function readFile(fileToRead) {
  const fileRead = fs.readFileSync(fileToRead, 'utf8');
  return fileRead;
}

function readAll(consoleLogOrNot, fileToRead){  
    const dataRead = readFile(fileToRead)
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
      {
        name: 'Calculate amount of materials for specific level',
        value: 'fourth',
        // disabled: 'Check characters by weekly boos material (coming soon)',
        description: "You can calculate how many materials you need for the next level, max level or whatever the level you want to check.",
      },
    ],
      // new Separator(),
 
  });

  if (chooseReadOption === 'first') {
    readAll(true, PATH)
  } else if (chooseReadOption === 'second') {
    const chosenCharacter = await getCharacterName(readAll(false, PATH));
    predictNecessaryMaterials(chosenCharacter);
  } else if (chooseReadOption === 'third') {
    // const charactersData = readAll(false, PATH);
    await returnAllCharactersWithThisTalentType(input, readAll(false, PATH));
  } else if(chooseReadOption === 'fourth') {
    const chosenCharacterToCalc = await getCharacterName(readAll(false, PATH));
    calcTalentMaterialsForSpecificLevel(chosenCharacterToCalc.talents.normalAtk, 10, chosenCharacterToCalc.talents.type, "Normal Attack");
  } else {
    console.log('Invalid option. Please type an option between 1 and 3')
  }
}

export { readAll, read, getCharacterName, readFile };