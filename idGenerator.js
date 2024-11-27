const { PATH } = require('./read');
const characters = require(PATH);

function idGenerator() {
    let existingId = [];

    for (let i = 0; i < characters.length; i++) {
        existingId.push(characters[i].id);
        existingId.toString();
    }
        
    let random = Math.floor(Math.random() * 1000);
 
    console.log(random);

    if (existingId.includes(random)) {
        console.log('Id já existe, randomizando novamente...');
        idGenerator();
    } else {
        return random;
    }
}

module.exports = {
    idGenerator: idGenerator
}