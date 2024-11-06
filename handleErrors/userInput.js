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

module.exports = {
    isThisTalentLevelValid: isThisTalentLevelValid
}
