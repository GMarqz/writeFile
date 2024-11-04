export default async function returnAllCharactersWithThisTalentType(input, charactersData) {

    const informTalentType = await input({ message: 'What is the talent type that you wanna check? '});
    const found = charactersData.filter((character) => {
        const characterType = character.talents.type;
       if(characterType === informTalentType) {
        console.log(character);
       }
    });
}
