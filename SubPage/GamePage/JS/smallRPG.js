let playerATK = JSON.parse(localStorage.getItem('info')).sRPGatk
let playerDEF = JSON.parse(localStorage.getItem('info')).sRPGdef
let playerHP = JSON.parse(localStorage.getItem('info')).sRPGhp

var monJSON = [
    {
        "name": "Gấu",
        "monATK": 3,
        "monDEF": 3,
        "monHP": 20
    },
    {
        "name": "Hổ",
        "monATK": 4,
        "monDEF": 1.5,
        "monHP": 10
    },
    {
        "name": "Sói",
        "monATK": 3.5,
        "monDEF": 2,
        "monHP": 10
    } 
]

function setupMonster() {
    let index = Math.floor(Math.random()*monJSON.length)
    let pickMon = monJSON[index]
    let monATK = pickMon.monATK
    let monDEF = pickMon.monDEF
    let monHP = pickMon.monHP
}