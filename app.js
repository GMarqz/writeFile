import { select, input } from '@inquirer/prompts';
import userInput from './userInput.js';
import * as readFunctions from './read.js';
import askNewDataInfo from './update.js';
import removeByName from './delete.js';

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

    const mainMenu = await select({
        message: '\n\nWelcome to Genshin Talent Check, what would you like to do today? \n',
        choices: [
          {
            name: 'Add a character',
            value: '1',
            description: 'Add a character',
          },
          {
            name: 'Check characters talents',
            value: '2',
            description: 'Check characters talents',
          },
          {
            name: 'Update a character info',
            value: '3',
            description: 'Update a character info',
          },
          {
            name: 'Delete a character',
            value: '4',
            description: 'Delete a character',
          },
            {
            name: 'Quit',
            value: '5',
            description: 'Quit',
          },
        ],
    });

    if(mainMenu === '1'){
        userInput();
    } else if (mainMenu === '2') {
        console.log('Reading...');
        await readFunctions.read();
        initApp();
    } else if(mainMenu === '3') {
        console.log('Updating...');
        const toUpdateCharacter = await readFunctions.getCharacterName(readFunctions.readAll(false));
        askNewDataInfo(toUpdateCharacter);
    } else if(mainMenu === '4') {
        console.log('Deleting...') ;
        const toDeleteName = await input({ message: "Please enter your character's name: "});
        removeByName(toDeleteName);
    } else if (mainMenu === '5') {
        console.log('Leaving...');
        process.exit();
    } else {
        console.log('\n \nSorry, this option is invalid, restarting program.');
        initApp();
    }
}

initApp();