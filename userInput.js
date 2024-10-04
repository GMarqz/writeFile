// const readline = require('node:readline');
const addDataToJson = require('./index');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

function userInput(rl) {


    let id, name, normalAtk, elementalSkill, elementalBurst, talentType, weeklyBossMaterial, pic, description;

    rl.question('Characters id: ', (answer) => {
        id = answer;
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
                                        // console.log(`
                                        //         {
                                                        // "id": ${id}
                                        //             "name": "${name}",
                                        //             "talents": {
                                        //                 "normalAtk": ${normalAtk},
                                        //                 "elementalSkill": ${elementalSkill},
                                        //                 "elementalBurst": ${elementalBurst},
                                        //                 "type": "${talentType}",
                                        //                 "weeklyBossMaterial": "${weeklyBossMaterial}"
                                        //             },
                                        //             "pic": "${pic}",
                                        //             "description": "${description}"
                                        //         }
                                        //     `)
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
    });
}

module.exports = {
    userInput: userInput
}

// "id": 89,
// "name": "Mualani",
// "talents": {
//   "normalAtk": 1,
//   "elementalSkill": 1,
//   "elementalBurst": 1,
//   "type": "Contention",
//   "weeklyBossMaterial": "Unknown"
// },
// "pic": "...",
// "description": "Well, this is a test but my current Mualani looks exactly like this. Lv50/60 BTW."