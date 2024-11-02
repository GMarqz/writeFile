const addDataToJson = require('./create');
const { readAll: readAll } = require('./read');
const { v4: uuidv4 } = require('uuid');

async function createNameIfItDoesntExist(rl) {
    const readArray = readAll(false);
    const checkCharacterName = await rl.question('Characters name: ');

    let charactersName = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    if(charactersName.includes(checkCharacterName)) {
        console.log("This character is already added to our database, please add another one or update the existing one.");
        userInput(rl);
    } else {
        return checkCharacterName;
    }
}

async function userInput(rl) {
    const id = uuidv4();
    const characterName = await createNameIfItDoesntExist(rl);
    const characterNormalAtk = await rl.question(`${characterName}'s normal attack level: `);
    const characterElementalSkill = await rl.question(`${characterName}'s elemental skill level: `);
    const characterElementalBurst = await rl.question(`${characterName}'s elemental burst level: `);
    const characterTalentType = await rl.question(`${characterName}'s talent type: `);
    const characterWeeklyBossMaterial = await rl.question(`${characterName}'s weekly boss material: `);
    const characterPic = await rl.question(`${characterName}'s pic is nested at: `);
    const characterDescription = await rl.question(`Add a description to ${characterName}'s profile: `);

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
    const returnJson = addDataToJson.addDataToJson(parsedUserOutputData);
    rl.close();
}

module.exports = {
    userInput: userInput
}
