const fs = require('fs');
const { clearJSON } = require('./create');

async function askNewDataInfo(character, rl) {
    const oldLevelMessage = "(or current level in case nothing changed)";
    const updatedNormalAtkLevel = await rl.question(`Enter the character's new Normal Attack Level ${oldLevelMessage}: `);
    const updatedElementalSkillLevel = await rl.question(`Enter the character's new Elemental Skill Level ${oldLevelMessage}: `);
    const updatedElementalBurstLevel = await rl.question(`Enter the character's new Elemental Burst Level ${oldLevelMessage}: `);
    const updatedDescription = await rl.question(`Enter the character's new Description: `);

    // const read = fs.readFileSync('./characters.json') ;
    // const readParsed = JSON.parse(read);
    // const readArray = [...readParsed];

    // let charactersId = [];
    // for(let i = 0; i < readArray.length; i++) {
    //     charactersId.push(readArray[i].id);
    // }
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
            "pic": "${character.pic}",
            "description": "${updatedDescription}"
        }
    `
    const updatedCharacterParsed = JSON.parse(updatedCharacter);

    const readJsonData = fs.readFileSync('./characters.json');
    const characterToUpdateId = character.id;
    const readJsonDataParsed = JSON.parse(readJsonData);
    const readJsonDataParsedInsideAnArray = [...readJsonDataParsed];

    let jsonCharactersId = [];
    for(let i = 0; i < readJsonDataParsedInsideAnArray.length; i++) {
        jsonCharactersId.push(readJsonDataParsedInsideAnArray[i].id);
    }
    if(jsonCharactersId.includes(characterToUpdateId)) {
        const indexOfGivenId = jsonCharactersId.indexOf(characterToUpdateId);
        readJsonDataParsedInsideAnArray.splice(indexOfGivenId, 1, updatedCharacterParsed);
        clearJSON();
        const sendArrayBackAsJson = JSON.stringify([...readJsonDataParsedInsideAnArray], null, 2)
        fs.writeFileSync('./characters.json', sendArrayBackAsJson, (err) => {
            if (err) throw err;
        })
    } else {
        console.log("Unexpected error.")
    }

    // console.log(updatedCharacter);
    // const parsedcharacterUpdated = JSON.parse(updatedCharacter);
    // const returnUpdatedJson = addDataFunction.addDataToJson(parsedcharacterUpdated);
    rl.close();
}

// askNewDataInfo(characters[0]);

module.exports = {
    askNewDataInfo: askNewDataInfo
}
