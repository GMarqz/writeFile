import { readAll } from './read.js';

function userValidator() {
    const data = readAll(false, './config.json')
    if(data[0].author === "true") {
        return '../characters.json';
    } else if(data[0].author === "false") {
        return data[0].userDbPath;
    }
}
  
  export default userValidator;