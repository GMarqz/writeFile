const fs = require('fs');

function read(){
    const dataRead = fs.readFileSync('./characters.json', 'utf8');
    console.log(dataRead);
}

module.exports = {
    read: read
}