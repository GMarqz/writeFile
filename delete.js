const { clearJSON } = require('./create');
const fs = require('fs');

function removeById(id) {
    
    const read = fs.readFileSync('./characters.json') ;
    const readParsed = JSON.parse(read);
    const readArray = [...readParsed];

    let charactersId = [];
    for(let i = 0; i < readArray.length; i++) {
        charactersId.push(readArray[i].id);
    }
    console.log(charactersId);
    if(charactersId.includes(id)) {
        const indexOfGivenId = charactersId.indexOf(id);
        readArray.splice(indexOfGivenId, 1);
        console.log(`${id} posicionado no index >${indexOfGivenId}< foi removido com sucesso!`);
        console.log(readArray);
        clearJSON();
        const returnArrayAsJson = JSON.stringify([...readArray], null, 2)
        fs.writeFileSync('./characters.json', returnArrayAsJson, (err) => {
            if (err) throw err;
        })
    } else {
        console.log("Unexpected error.")
    }
} 

module.exports = {
    removeById: removeById
}