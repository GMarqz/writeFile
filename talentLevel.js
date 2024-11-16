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
];

//Ask the user: Whats the maximum level you wanna invest for this talent?
// currentLevel + nextLevels until maximumLevel.

function calcTalentMaterialsForSpecificLevel(currentLevel, specificLevel) {

    const talentLevels = [
        0,
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
    ];

    let allGivenLevels = [];
    let sum = 0;

    while(currentLevel <= specificLevel){
        let clevel = talentLevels[currentLevel];
        allGivenLevels.push(clevel);
        currentLevel++;
        console.log(currentLevel);
        console.log(allGivenLevels);
    }

    for(let i = 0; i < allGivenLevels.length; i++) {
        sum += allGivenLevels[i];
        console.log(sum)
    }
}

calcTalentMaterialsForSpecificLevel(6, 9);

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
        \n ${talentMessage('Normal Attack', normalAtkParamms, normalAtkLevelIndex, normalAtkRarity, talentType)}
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