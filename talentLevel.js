const levels = [
    0,
    3,
    2,
    4,
    6,
    9,
    4,
    6,
    12,
    16,
    "This talent is crowned."
]

function calcTalentMaterialsForSpecificLevel(currentLevel, specificLevel) {

    let clevel = levels[currentLevel];
    const slevel = levels[specificLevel];
    // let nextClevelIndex;
    let result = 0;
    // while(clevel <= slevel) {
    //     nextClevelIndex = currentLevel + 1;
    //     clevel = clevel + levels[nextClevelIndex];
    //     nextClevelIndex++;
    //     clevel++;
    // }
    console.log(`You need ${clevel} materials to get to your desired level.`);
    console.log(levels[9]);
    // console.log(slevel);
    levels.forEach((level) => {
        if(level >= currentLevel) {

        }
    })

    for(let i = currentLevel; levels[i] >= currentLevel; i++) {

    }
}

// calcTalentMaterialsForSpecificLevel(6, 9);
// console.log(levels[6] + 1)

function identifyRarity(talentLevel) {
    if(talentLevel === 1) {
        return "teachings";
    } else if(talentLevel >= 2 && talentLevel <= 5) {
        return "guide";
    } else if(talentLevel >= 6 && talentLevel <= 10) {
        return "philosophies";
    } else {
        return "invalid level";
    }
}

function talentMessage(talent, talentLevel, talentIndex, talentRarity, talentType) {
    if(talentLevel <= 9) {
        return `${talentIndex} ${talentRarity} of ${talentType} to upgrade its ${talent} to the next level.`
    } else if(talentLevel === 10) {
        return `${talent} is already crowned`
    } else {
        console.log("Undexpected error");
    }
}

function identifyLevel(normalAtkParamms, elementalSkillParamms, elementalBurstParamms, talentTypeParamms) {
    const normalAtkLevelIndex = levels[normalAtkParamms];
    const elementalSkillIndex = levels[elementalSkillParamms];
    const elementalBurstIndex = levels[elementalBurstParamms];
    const talentType = talentTypeParamms;

    const normalAtkRarity = identifyRarity(normalAtkParamms);
    const elementalSkillRarity = identifyRarity(elementalSkillParamms);
    const elementalBurstRarity = identifyRarity(elementalBurstParamms);

    console.log(`
        This character needs:
        \n ${talentMessage('Normal Atack', normalAtkParamms, normalAtkLevelIndex, normalAtkRarity, talentType)}
        \n ${talentMessage('Elemental Skill', elementalSkillParamms, elementalSkillIndex, elementalSkillRarity, talentType)}
        \n ${talentMessage('Elemental Burst', elementalBurstParamms, elementalBurstIndex, elementalBurstRarity, talentType)}.
    `);
}

function predictNecessaryMaterials(character) {
    let normalAtkLevel = character.talents.normalAtk;
    let elementalSkillLevel = character.talents.elementalSkill;
    let elementalBurstLevel = character.talents.elementalBurst;
    let characterTalentType = character.talents.type;

    identifyLevel(normalAtkLevel, elementalSkillLevel, elementalBurstLevel, characterTalentType);

}

module.exports = {
    predictNecessaryMaterials: predictNecessaryMaterials
}