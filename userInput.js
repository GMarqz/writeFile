const addDataToJson = require('./index');
const idGenerator = require('./idGenerator');

const id = idGenerator.idGenerator();

function userInput(rl) {

    let name, normalAtk, elementalSkill, elementalBurst, talentType, weeklyBossMaterial, pic, description;

        rl.question('Characters name: ', (answer) => {
            name = answer;
            rl.question(`${name}'s normal attack level: `, (answer) => {
                normalAtk = answer;
                rl.question(`${name}'s elemental skill level: `, (answer) => {
                    elementalSkill = answer;
                    rl.question(`${name}'s elemental burst level: `, (answer) => {
                        elementalBurst = answer;
                        rl.question(`${name}'s talent type: `, (answer) => {
                            talentType = answer;
                            rl.question(`${name}'s weekly boss material: `, (answer) => {
                                weeklyBossMaterial = answer;
                                rl.question(`${name}'s pic is nested at: `, (answer) => {
                                    pic = answer;
                                    rl.question(`Add a description to ${name}'s profile: `, (answer) => {
                                        description = answer;
                                        let getData;
                                        getData = `
                                            {
                                                "id": ${id},
                                                "name": "${name}",
                                                "talents": {
                                                    "normalAtk": ${normalAtk},
                                                    "elementalSkill": ${elementalSkill},
                                                    "elementalBurst": ${elementalBurst},
                                                    "type": "${talentType}",
                                                    "weeklyBossMaterial": "${weeklyBossMaterial}"
                                                },
                                                "pic": "${pic}",
                                                "description": "${description}"
                                            }
                                        `
                                        const parsedUserOutputData = JSON.parse(getData)
                                        const returnJson = addDataToJson.addDataToJson(parsedUserOutputData);
                                        rl.close();
                                    })
                                })
                            })
                        })
                    })
                })
            });
        });
}

module.exports = {
    userInput: userInput
}
