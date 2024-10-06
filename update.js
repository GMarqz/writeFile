async function askNewDataInfo(character, rl, addDataFunction) {
    const oldLevelMessage = "(or current level in case nothing changed)";
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
    const returnUpdatedJson = addDataFunction.addDataToJson(parsedcharacterUpdated);
    rl.close();
}

// askNewDataInfo(characters[0]);

module.exports = {
    askNewDataInfo: askNewDataInfo
}
