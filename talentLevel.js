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
    16
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
}

calcTalentMaterialsForSpecificLevel(6, 9);
// console.log(levels[6] + 1)

function identifyRarity(talentLevel) {
    if(talentLevel === 1) {
        return "teachings";
    } else if(talentLevel >= 2 && talentLevel <= 6) {
        return "guide";
    } else if(talentLevel >= 7 && talentLevel <= 10) {
        return "philosophies";
    } else {
        return "invalid level";
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
        \n ${normalAtkLevelIndex} ${normalAtkRarity} of ${talentType} to upgrade its Normal Attack to the next level.
        \n ${elementalSkillIndex} ${elementalSkillRarity} of ${talentType} to upgrade its Elemental Skill to the next level.
        \n ${elementalBurstIndex} ${elementalBurstRarity} of ${talentType} to upgrade its Elemental Burst to the next level.
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