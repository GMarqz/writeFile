import * as createFuntions from './create.js';
import * as readFunctions from './read.js';
import { input } from '@inquirer/prompts';
import { v4 as uuidv4 } from 'uuid';
import { PATH } from './app.js';

async function createNameIfItDoesntExist() {
    const readArray = readFunctions.readAll(false, PATH);
    const checkCharacterName = await input({ message: 'Characters name: '});

    let charactersName = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    if(charactersName.includes(checkCharacterName)) {
        console.log("This character is already added to our database, please add another one or update the existing one.");
        userInput();
    } else {
        return checkCharacterName;
    }
}

export default async function userInput() {
    const id = uuidv4();
    const characterName = await createNameIfItDoesntExist();
    const characterNormalAtk = await input({ message: `${characterName}'s normal attack level: `});
    const characterElementalSkill = await input({ message: `${characterName}'s elemental skill level: `});
    const characterElementalBurst = await input({ message: `${characterName}'s elemental burst level: `});
    const characterTalentType = await input({ message: `${characterName}'s talent type: `});
    const characterWeeklyBossMaterial = await input({ message: `${characterName}'s weekly boss material: `});
    const characterPic = await input({ message: `${characterName}'s pic is nested at: `});
    const characterDescription = await input({ message: `Add a description to ${characterName}'s profile: `});

    let getData;
    getData = `
        {
            "id": "${id}",
            "name": "${characterName}",
            "talents": {
                "normalAtk": ${characterNormalAtk},
                "elementalSkill": ${characterElementalSkill},
                "elementalBurst": ${characterElementalBurst},
                "type": "${characterTalentType}",
                "weeklyBossMaterial": "${characterWeeklyBossMaterial}"
            },
            "pic": "${characterPic}",
            "description": "${characterDescription}"
        }
    `
    console.log(`\n\nCheck the character you just added to database: \n${getData}`)
    const parsedUserOutputData = JSON.parse(getData)
    const returnJson = createFuntions.addDataToJson(parsedUserOutputData);
}
