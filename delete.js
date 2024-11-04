import * as createFuntions from './create.js';
import * as readFunctions from './read.js';

export default function removeByName(characterName) {
    const readArray = readFunctions.readAll(false);

    let charactersName = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    
    // Dont forget to add a function asking if the user is sure about deleting the character, later.

    if(charactersName.includes(characterName)) {
        const indexOfGivenName = charactersName.indexOf(characterName);
        readArray.splice(indexOfGivenName, 1);
        console.log(`${characterName} posicionado no index >${indexOfGivenName}< foi removido com sucesso!`);
        createFuntions.clearJSON();
        const returnArrayAsJson = JSON.stringify([...readArray], null, 2);
        createFuntions.write(returnArrayAsJson);
    } else {
        console.log("Unexpected error.")
    }
} 
