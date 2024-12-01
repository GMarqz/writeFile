import * as createFunctions from './create.js';
import * as readFuntions from './read.js';
import { input } from '../node_modules/@inquirer/prompts/dist/commonjs/index.js';

export default async function askNewDataInfo(character) {
    const oldLevelMessage = "(or current level in case nothing changed)";
    const updatedNormalAtkLevel = await input({ message: `Enter the character's new Normal Attack Level ${oldLevelMessage}: `});
    const updatedElementalSkillLevel = await input({ message: `Enter the character's new Elemental Skill Level ${oldLevelMessage}: `});
    const updatedElementalBurstLevel = await input({ message: `Enter the character's new Elemental Burst Level ${oldLevelMessage}: `});
    const updatedDescription = await input({ message: `Enter the character's new Description: `});

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
    console.log(`\n\nCheck your updated data: \n${updatedCharacter}`);
    const updatedCharacterParsed = JSON.parse(updatedCharacter);
    const characterToUpdateId = character.id;
    const readJsonDataParsedInsideAnArray = readFuntions.readAll(false);

    let jsonCharactersId = [];
    for(let i = 0; i < readJsonDataParsedInsideAnArray.length; i++) {
        jsonCharactersId.push(readJsonDataParsedInsideAnArray[i].id);
    }
    if(jsonCharactersId.includes(characterToUpdateId)) {
        const indexOfGivenId = jsonCharactersId.indexOf(characterToUpdateId);
        readJsonDataParsedInsideAnArray.splice(indexOfGivenId, 1, updatedCharacterParsed);
        createFunctions.clearJSON();
        const sendArrayBackAsJson = JSON.stringify([...readJsonDataParsedInsideAnArray], null, 2);
        createFunctions.write(sendArrayBackAsJson);
    } else {
        console.log("Unexpected error.")
    }
}
