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

function calcTalentMaterialsForSpecificLevel(currentLevel, specificLevel, talentMaterialType, talentSkill) {

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

    let guideLevels = [];
    let philosophiesLevels = [];
    let sumGuide = 0;
    let sumPhilo = 0;
    let initialLevel = currentLevel;
    talentLevels.splice(initialLevel, 1);

    while(currentLevel < 2) {
        currentLevel++;
        // console.log('You need 3 teachings');
    }

    while(currentLevel <= specificLevel && currentLevel >= 2 && currentLevel < 6){
        let guideLevel = talentLevels[currentLevel];
        guideLevels.push(guideLevel);
        currentLevel++;
        // console.log(guideLevels + ' \nEste foi o guide levels')
    }

    while(currentLevel >= 6 && currentLevel < specificLevel) {
        // currentLevel++;
        let philosophiesLevel = talentLevels[currentLevel];
        philosophiesLevels.push(philosophiesLevel);
        currentLevel++;
        // console.log(philosophiesLevels + '\n Este foi o philo levels');
    }

    for(let i = 0; i < guideLevels.length; i++) {
        sumGuide += guideLevels[i];
    }

    for(let i = 0; i < philosophiesLevels.length; i++) {
        sumPhilo += philosophiesLevels[i];
        // console.log(sumPhilo + 'esta é a soma do philo')
    }

    console.log(`This character needs ${sumGuide} guides of ${talentMaterialType} and ${sumPhilo} philosophies of ${talentMaterialType} to upgrade its ${talentSkill} to your desired level.`);
}

// calcTalentMaterialsForSpecificLevel(1, 10, 'Gold', 'Elemental Skill');

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

export { calcTalentMaterialsForSpecificLevel, predictNecessaryMaterials };