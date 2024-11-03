// const fs = require('fs');
import fs from 'node:fs';
import { select, Separator, input } from '@inquirer/prompts';
// import { readFile } from 'fs/promises';
// const characters = JSON.parse(await readFile('./characters.json', 'utf8'));
// const { returnAllCharactersWithThisTalentType } = require('./talentType');

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

async function getCharacterName(data) {
  const provideCharacterName = await input({ message: 'Enter the characters name: '});
  const characterFound = readByName(data, provideCharacterName);
  console.log(characterFound);
  return characterFound;
}

// async function read(rl, data) {

//   const chooseReadOption = await rl.question(`Choose an option below: \n[1] - See all characters data \n[2] - See character data by name \n[3] - See characters by talent type \n`);

//   if (chooseReadOption === '1') {
//     readAll(true)
//     rl.close();
//   } else if (chooseReadOption === '2') {
//     await getCharacterName(rl, data)
//   } else if (chooseReadOption === '3') {
//     const charactersData = readAll(false);
//     await returnAllCharactersWithThisTalentType(rl, charactersData);
//   } else {
//     console.log('Invalid option. Please type an option between 1 and 3')
//     rl.close();
//   }
// }

export async function read() {
  const answer = await select({
    message: 'Select a package manager',
    choices: [
      // {
      //   name: 'npm',
      //   value: 'npm',
      //   description: 'npm is the most popular package manager',
      // },
      // {
      //   name: 'yarn',
      //   value: 'yarn',
      //   description: 'yarn is an awesome package manager',
      // },
      new Separator(),
      readAll(true)
    //   {
    //     name: 'jspm',
    //     value: 'jspm',
    //     disabled: true,
    //   },
    //   {
    //     name: 'pnpm',
    //     value: 'pnpm',
    //     disabled: '(pnpm is not available)',
    //   },
    ],
  });
}

read();
// module.exports = {
//   read: read,
//   getCharacterName: getCharacterName,
//   readAll: readAll
// }