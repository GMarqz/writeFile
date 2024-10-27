const addDataToJson = require('./create');
const idGenerator = require('./idGenerator');

async function userInput(rl) {
    const id = idGenerator.idGenerator();
    const characterName = await rl.question('Characters name: ');
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
            "id": ${id},
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
