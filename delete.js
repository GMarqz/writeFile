import { clearJSON, write } from './create.js';
import { readAll } from './read.js';
import { PATH } from './app.js';

export default function removeByName(characterName) {
    const readArray = readAll(false, PATH);

    let charactersName = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersName.push(readArray[i].name);
    }
    
    // Dont forget to add a function asking if the user is sure about deleting the character, later.

    if(charactersName.includes(characterName)) {
        const indexOfGivenName = charactersName.indexOf(characterName);
        readArray.splice(indexOfGivenName, 1);
        console.log(`${characterName} posicionado no index >${indexOfGivenName}< foi removido com sucesso!`);
        clearJSON(PATH);
        const returnArrayAsJson = JSON.stringify([...readArray], null, 2);
        write(returnArrayAsJson, PATH);
    } else {
        console.log("Unexpected error.")
    }
} 
