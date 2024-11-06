async function isNormalAtkValid(rl, characterName) {
    const levelStrings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const getCharacterNormalAtk = await rl.question(`${characterName}'s normal attack level: `);
    if(!levelStrings.includes(getCharacterNormalAtk) || getCharacterNormalAtk > 10 || getCharacterNormalAtk < 1) {
        console.log("\nERROR: Normal attack level should be a number between 1 and 10\n");
        isNormalAtkValid(rl, characterName);
    } else if(levelStrings.includes(getCharacterNormalAtk) && getCharacterNormalAtk >= 1 && getCharacterNormalAtk <= 10) {
        console.log("Worked")
    }
}

module.exports = {
    isNormalAtkValid: isNormalAtkValid
}