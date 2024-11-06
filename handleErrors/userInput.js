async function isThisTalentLevelValid(rl, characterName, talent) {
    const talentQuestionMessage = `${characterName}'s ${talent} level: `;

    let isValid = false;
    const levelStrings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let getCharacterTalentLevel;
    while(isValid == false) {
        //thanks chatgpt for remind me that while() exists.
        getCharacterTalentLevel = await rl.question(talentQuestionMessage);
        if(!levelStrings.includes(getCharacterTalentLevel) || getCharacterTalentLevel > 10 || getCharacterTalentLevel < 1) {
            console.log("\nERROR: Normal attack level should be a number between 1 and 10\n");
        } else if(levelStrings.includes(getCharacterTalentLevel) && getCharacterTalentLevel >= 1 && getCharacterTalentLevel <= 10) {
            break;
        }
    }    
    return getCharacterTalentLevel;
}

async function isThisTalentTypeValid(rl, characterName) {
    const talentType = ['Freedom', 'Resistance', 'Ballad', 'Prosperity', 'Diligence', 'Gold', 'Transience', 'Elegance', 'Light', 'Admonition', 'Ingenuity', 'Praxis', 'Equity', 'Order', 'Justice', 'Contention', 'Kindling', 'Conflict'];

    let isValid = false;
    let getCharacterTalentType;
    while(isValid == false) {
        getCharacterTalentType = await rl.question(`${characterName}'s talent type: `);
        if(!talentType.includes(getCharacterTalentType)) {
            console.log(`\nERROR: Please, enter one of the talent type below:\n${talentType}\n`);
        } else if(talentType.includes(getCharacterTalentType)) {
            break;
        }
    }
    return getCharacterTalentType;
}

module.exports = {
    isThisTalentLevelValid: isThisTalentLevelValid,
    isThisTalentTypeValid: isThisTalentTypeValid
}
