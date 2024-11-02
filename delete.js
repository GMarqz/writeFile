const { clearJSON, write } = require('./create');
const { readAll } = require('./read');

function removeByName(characterName) {
    const readArray = readAll(false);

    let charactersName = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    
    // Dont forget to add a function asking if the user is sure about deleting the character, later.

    if(charactersName.includes(characterName)) {
        const indexOfGivenName = charactersName.indexOf(characterName);
        readArray.splice(indexOfGivenName, 1);
        console.log(`${characterName} posicionado no index >${indexOfGivenName}< foi removido com sucesso!`);
        clearJSON();
        const returnArrayAsJson = JSON.stringify([...readArray], null, 2);
        write(returnArrayAsJson);
    } else {
        console.log("Unexpected error.")
    }
} 

module.exports = {
    removeByName: removeByName
}