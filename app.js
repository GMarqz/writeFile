const readline = require('node:readline/promises');
const read = require('./read');
const userInput = require('./userInput');
const askNewDataInfo = require('./update');
const characters = require('./characters.json');
const addDataToJson = require('./create');
const getCharacterName = require('./read');
const { removeById } = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//fsymbols.com for cool fonts like the one below.
console.log(`
░██████╗░███████╗███╗░░██╗░██████╗██╗░░██╗██╗███╗░░██╗  ████████╗░█████╗░██╗░░░░░███████╗███╗░░██╗████████╗
██╔════╝░██╔════╝████╗░██║██╔════╝██║░░██║██║████╗░██║  ╚══██╔══╝██╔══██╗██║░░░░░██╔════╝████╗░██║╚══██╔══╝
██║░░██╗░█████╗░░██╔██╗██║╚█████╗░███████║██║██╔██╗██║  ░░░██║░░░███████║██║░░░░░█████╗░░██╔██╗██║░░░██║░░░
██║░░╚██╗██╔══╝░░██║╚████║░╚═══██╗██╔══██║██║██║╚████║  ░░░██║░░░██╔══██║██║░░░░░██╔══╝░░██║╚████║░░░██║░░░
╚██████╔╝███████╗██║░╚███║██████╔╝██║░░██║██║██║░╚███║  ░░░██║░░░██║░░██║███████╗███████╗██║░╚███║░░░██║░░░
░╚═════╝░╚══════╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░

░█████╗░██╗░░██╗███████╗░█████╗░██╗░░██╗
██╔══██╗██║░░██║██╔════╝██╔══██╗██║░██╔╝
██║░░╚═╝███████║█████╗░░██║░░╚═╝█████═╝░
██║░░██╗██╔══██║██╔══╝░░██║░░██╗██╔═██╗░
╚█████╔╝██║░░██║███████╗╚█████╔╝██║░╚██╗
░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝░░╚═╝`);

async function initApp() {

    const mainMenu = await rl.question('\n\nWelcome to Genshin Talent Check, what would you like to do today? \n[1] - Add a character \n[2] - Check characters talents \n[3] - Update a character info \n[4] - Delete a character \n[5] - Quit \n(Select the number that matches your desired option): ');

    if(mainMenu === '1'){
        const firstOption = userInput.userInput(rl);
    } else if (mainMenu === '2') {
        console.log('Reading...');
        await read.read(rl, characters);
        rl.close();
    } else if(mainMenu === '3') {
        console.log('Updating...');
        const toUpdateCharacter = await getCharacterName.getCharacterName(rl, characters);
        askNewDataInfo.askNewDataInfo(toUpdateCharacter, rl);
    } else if(mainMenu === '4') {
        console.log('Deleting...') ;
        const toDeleteId = await rl.question("Please enter your character's id: ");
        removeById(Number(toDeleteId));
        rl.close();
    } else if (mainMenu === '5') {
        console.log('Leaving...');
        rl.close();
    } else {
        console.log('\n \nSorry, this option is invalid, restarting program.');
        // rl.close();
        initApp();
    }
}

initApp();