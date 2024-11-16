const { clearJSON, write } = require('./create');
const {readAll} = require('./read');

async function askNewDataInfo(character, rl) {
    const oldLevelMessage = "(or current level in case nothing changed)";
    const updatedNormalAtkLevel = await rl.question(`Enter the character's new Normal Attack Level ${oldLevelMessage}: `);
    const updatedElementalSkillLevel = await rl.question(`Enter the character's new Elemental Skill Level ${oldLevelMessage}: `);
    const updatedElementalBurstLevel = await rl.question(`Enter the character's new Elemental Burst Level ${oldLevelMessage}: `);
    const updatedRegion = await rl.question(`Enter the character's new region: `)
    const updatedDescription = await rl.question(`Enter the character's new Description: `);

    const updatedCharacter = `
        {
            "id": ${character.id},
            "name": "${character.name}",
            "talents": {
                "normalAtk": ${updatedNormalAtkLevel},
                "elementalSkill": ${updatedElementalSkillLevel},
                "elementalBurst": ${updatedElementalBurstLevel},
                "type": "${character.talents.type}",
                "weeklyBossMaterial": "${character.talents.weeklyBossMaterial}"
            },
            "region": "${updatedRegion}",
            "pic": "${character.pic}",
            "description": "${updatedDescription}"
        }
    `
    console.log(`\n\nCheck your updated data: \n${updatedCharacter}`);
    const updatedCharacterParsed = JSON.parse(updatedCharacter);
    const characterToUpdateId = character.id;
    const readJsonDataParsedInsideAnArray = readAll(false);

    let jsonCharactersId = [];
    for(let i = 0; i < readJsonDataParsedInsideAnArray.length; i++) {
        jsonCharactersId.push(readJsonDataParsedInsideAnArray[i].id);
    }
    if(jsonCharactersId.includes(characterToUpdateId)) {
        const indexOfGivenId = jsonCharactersId.indexOf(characterToUpdateId);
        readJsonDataParsedInsideAnArray.splice(indexOfGivenId, 1, updatedCharacterParsed);
        clearJSON();
        const sendArrayBackAsJson = JSON.stringify([...readJsonDataParsedInsideAnArray], null, 2);
        write(sendArrayBackAsJson);
    } else {
        console.log("Unexpected error.")
    }
    rl.close();
}

module.exports = {
    askNewDataInfo: askNewDataInfo
}
