const readline = require('node:readline/promises');
const characters = require('./characters.json');
const addDataToJson = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function updateCharacterData(character) {

    async function askNewDataInfo() {
        const oldLevelMessage = "(or old level in case nothing changed)";
        const updatedNormalAtkLevel = await rl.question(`Enter the character's new Normal Attack Level ${oldLevelMessage}: `);
        const updatedElementalSkillLevel = await rl.question(`Enter the character's new Elemental Skill Level ${oldLevelMessage}: `);
        const updatedElementalBurstLevel = await rl.question(`Enter the character's new Elemental Burst Level ${oldLevelMessage}: `);
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
            "pic": "${character.pic}",
            "description": "${updatedDescription}"
        }
    `
        console.log(updatedCharacter);
        const parsedcharacterUpdated = JSON.parse(updatedCharacter);
        const returnUpdatedJson = addDataToJson.addDataToJson(parsedcharacterUpdated);
        rl.close();
        
    }

    askNewDataInfo();
}

updateCharacterData(characters[0]);

//Now I've got to get user's input to decided which character is to update and delete its old data, keeping only the updated one.
