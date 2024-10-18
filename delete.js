const { clearJSON, write } = require('./create');
const { readAll } = require('./read');

function removeById(id) {
    const readArray = readAll(false);

    let charactersId = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersId.push(readArray[i].id);
    }
    
    if(charactersId.includes(id)) {
        const indexOfGivenId = charactersId.indexOf(id);
        readArray.splice(indexOfGivenId, 1);
        console.log(`${id} posicionado no index >${indexOfGivenId}< foi removido com sucesso!`);
        console.log(readArray);
        clearJSON();
        const returnArrayAsJson = JSON.stringify([...readArray], null, 2);
        write(returnArrayAsJson);
    } else {
        console.log("Unexpected error.")
    }
} 

module.exports = {
    removeById: removeById
}