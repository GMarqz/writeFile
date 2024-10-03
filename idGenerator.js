const characters = require('./characters.json');

function idGenerator() {
    const existingId = [];

    for (let i = 0; i < characters.length; i++) {
        // console.log(characters[i].id)
        existingId.push(characters[i].id);
        // console.log(existingId)
    }

    const random = Math.floor(Math.random() * 10);
    console.log(random)
    if (random === existingId) {
        random++
        console.log('Id já existe, adicionando +1...');
    } else {
        existingId.push(random)
        console.log('Id não existe, operação realizada com sucesso')
    }

}

idGenerator();

//CONTINUAR ISSO AQUI DEPOIS DE APRENDER A PERCORRER O ARQUIVO JSON E ENCONTRAR SOMENTE A PALAVRA ID, GUARDAR SEU VALOR E GERAR UM NUMERO ALEATORIO QUE NAO SEJA IGUAL AOS IDS EXISTENTES