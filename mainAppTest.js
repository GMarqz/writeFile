const readline = require('node:readline');
const read = require('./read');
const userInput = require('./userInput');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
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
░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝░░╚═╝`)

rl.question('\n\nWelcome to Genshin Talent Check, what would you like to do today? \n[1] - Add a character \n[2] - Check characters talents \n[3] - Update a character info \n[4] - Delete a character \n[5] - Quit \n(Select the number that matches your desired option): ', (answer) => {
    if(answer === '1'){
        const results = userInput.userInput(rl);
    } else if (answer === '2') {
        console.log('Reading...')
        read.read(rl);
    } else if(answer === '3') {
        console.log('Updating...')
        rl.close()
    } else if(answer === '4') {
        console.log('Deleting...') 
        rl.close()
    } else if (answer === '5') {
        console.log('Leaving...')
        rl.close()
    } else {
        console.log('Sorry, this option is invalid, closing program...')
        rl.close()
    }
})