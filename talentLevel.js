const { readAll } = require('./read');

const charactersData = readAll(false);
const testCharacter = charactersData[18];
console.log(testCharacter);
const levels = {
    0: 0,
    1: 3,
    2: 2,
    3: 4,
    4: 6,
    5: 9,
    6: 4,
    7: 6,
    8: 12,
    9: 16
}

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
    // const normalAtk = normalAtkParamms;
    // const elementalSkill = elementalSkillParamms;
    // const elementalBurst = elementalBurstParamms;
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
    // const charactersData = readAll(false);

    // console.log(charactersData[0].talents.normalAtk)
    identifyLevel(normalAtkLevel, elementalSkillLevel, elementalBurstLevel, characterTalentType);

}

predictNecessaryMaterials(testCharacter);

