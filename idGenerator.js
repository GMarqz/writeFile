function idGenerator() {
    const existingId = [89]
    const random = Math.floor(Math.random() * 1000);
    if (random == existingId) {
        random++
    } else {
        existingId.push(random)
    }

}

//CONTINUAR ISSO AQUI DEPOIS DE APRENDER A PERCORRER O ARQUIVO JSON E ENCONTRAR SOMENTE A PALAVRA ID, GUARDAR SEU VALOR E GERAR UM NUMERO ALEATORIO QUE NAO SEJA IGUAL AOS IDS EXISTENTES