const fs = require('fs');
const PATH = '../../characters.json';
const { returnAllCharactersWithThisTalentType } = require('./talentType');
const { predictNecessaryMaterials, calcTalentMaterialsForSpecificLevel } = require('./talentLevel');
const { getUserInputThenCalcTalentMaterialsForSpecificLevel } = require('./talentLevelInput');

function readAll(consoleLogOrNot){
    const dataRead = fs.readFileSync(PATH, 'utf8');
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

  const chooseReadOption = await rl.question(`Choose an option below: \n[1] - See all characters data \n[2] - See character data by name \n[3] - See characters by talent type \n[4] - See character data and calculate amount of materials for max level. \n`);

  if (chooseReadOption === '1') {
    readAll(true);
    // rl.close();
  } else if (chooseReadOption === '2') {
    const chosenCharacter = await getCharacterName(rl, data);
    predictNecessaryMaterials(chosenCharacter);
  } else if (chooseReadOption === '3') {
    const charactersData = readAll(false);
    await returnAllCharactersWithThisTalentType(rl, charactersData);
  } else if(chooseReadOption === '4'){
    const chooseCharacterAndCalcMats = await getCharacterName(rl, data);

    getUserInputThenCalcTalentMaterialsForSpecificLevel(rl, chooseCharacterAndCalcMats);

    // const calcNormalAtkMats = calcTalentMaterialsForSpecificLevel(chooseCharacterAndCalcMats.talents.normalAtk, 10, chooseCharacterAndCalcMats.talents.type, 'Normal Attack');
    // const calcElementalSkillMats = calcTalentMaterialsForSpecificLevel(chooseCharacterAndCalcMats.talents.elementalSkill, 10, chooseCharacterAndCalcMats.talents.type, 'Elemental Skill');
    // const calcElementalBurstMats = calcTalentMaterialsForSpecificLevel(chooseCharacterAndCalcMats.talents.elementalBurst, 10, chooseCharacterAndCalcMats.talents.type, 'Elemental Burst');
  } else {
    console.log('Invalid option. Please type an option between 1 and 3')
    rl.close();
  }
}

module.exports = {
  read: read,
  getCharacterName: getCharacterName,
  readAll: readAll,
  PATH
}