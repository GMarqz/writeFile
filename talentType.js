async function returnAllCharactersWithThisTalentType(rl, charactersData) {

    const informTalentType = await rl.question('What is the talent type that you wanna check? ');
    const found = charactersData.filter((character) => {
        const characterType = character.talents.type;
       if(characterType === informTalentType) {
        console.log(character);
       }
    });

}

module.exports = {
    returnAllCharactersWithThisTalentType: returnAllCharactersWithThisTalentType
}