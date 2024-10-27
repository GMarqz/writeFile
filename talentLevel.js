const { readAll } = require('./read');

const levels = {
    1: 3,
    2: 2,
    3: 4,
    4: 6,
    5: 9,
    6: 4,
    7: 6,
    8: 12,
    9: 16
}

function predictNecessaryMaterials() {
    const charactersData = readAll(false);

    console.log(charactersData[0].talents.normalAtk)
}

predictNecessaryMaterials();