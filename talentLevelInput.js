const { calcTalentMaterialsForSpecificLevel } = require('./talentLevel');

async function getUserInputThenCalcTalentMaterialsForSpecificLevel(rl, character) {
    const askSpecificLevelForNormalAtk = await rl.question("Which level would you like to check? (Please enter a number between 1 and 10 then press Enter.)")
    calcTalentMaterialsForSpecificLevel(character.talents.normalAtk, Number(askSpecificLevelForNormalAtk),character.talents.type, "Normal Attack" );
    rl.close();
}

module.exports = {
    getUserInputThenCalcTalentMaterialsForSpecificLevel: getUserInputThenCalcTalentMaterialsForSpecificLevel
}

//Fazendo um teste tápido, essa função já funciona, mas tem 2 problemas:
// O primeiro problema é no 'core' da calcTalentMaterialsForSpecificLevel(), eu testei essa função na Kachina, pra calcular do lv 1 ao lv 7. As filosofias estão certas, mas tá falando 19 guias ao invés de 21, provavelmente por causa do 'currentLevel++' em algum lugar da função. Checar depois.
// O segundo problema é que a mensagem é fixa, precisa ser personalizada pra cada situação, como excluir os guides da mensagem, caso o personagem só precise de filosofias.