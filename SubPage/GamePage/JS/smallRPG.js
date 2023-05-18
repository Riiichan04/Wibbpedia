let level = JSON.parse(localStorage.getItem('info')).level
let playerATK = JSON.parse(localStorage.getItem('info')).sRPGatk + 5 * level
let playerDEF = JSON.parse(localStorage.getItem('info')).sRPGdef + 3 * level
let playerHP = JSON.parse(localStorage.getItem('info')).sRPGhp + 7 * level


let currentLEVEL = level

const userN = JSON.parse(localStorage.getItem('info')).username

const currentPlayerBar = document.getElementById("currentPlayer_HP")
const currentMonBar = document.getElementById("currentMon_HP")

const infoPlayer = document.getElementById("infoPlayer")
const infoMon = document.getElementById("infoMonster")
const fullHP = document.getElementById("full_HP")
const btnDiv = document.getElementById("btnDiv")

let currentPlayerHP = playerHP
var monJSON = [
    {
        "name": "Gấu",
        "monATK": 3.5,
        "monDEF": 3,
        "monHP": 20
    },
    {
        "name": "Hổ",
        "monATK": 5,
        "monDEF": 1.5,
        "monHP": 15
    },
    {
        "name": "Sói",
        "monATK": 4,
        "monDEF": 2,
        "monHP": 10
    }
]

let index = Math.floor(Math.random() * monJSON.length)
let pickMon = monJSON[index]
let monHP = pickMon.monHP
let monCurrentHP = monHP
let monATK = pickMon.monATK
let monDEF = pickMon.monDEF
let monName = pickMon.name

function setupMonster() {
    infoMon.innerHTML = `<div style="font-size: 19px"> Một con ${monName} đã xuất hiện. Chiến đấu thôi! </div>` + ` <div style="font-size:17.5px"> <b> ${monName} </b> </div> <div style="margin-left: 20px"> Tấn Công:  ${monATK} <br>Phòng Ngự: ${monDEF}<br>HP: ${monCurrentHP}/${monHP} </div>`
}

function setupPlayer() {
    infoPlayer.innerHTML = ` <div style="font-size:17.5px"> <b> ${JSON.parse(localStorage.getItem('info')).name} </b> </div> <div style="margin-left: 20px"> Level: ${currentLEVEL} <br> Tấn Công:  ${playerATK} <br>Phòng Ngự: ${playerDEF}<br>HP: ${currentPlayerHP}/${playerHP} </div>`
}

const btnATK = document.getElementById("btn_ATK")
const btnHeal = document.getElementById("btn_Heal")
const infoLastATK = document.getElementById("infoLastATK")

const replayDiv = document.createElement('div')
replayDiv.innerText = 'Chơi Lại'
replayDiv.id = 'replayBTN'
replayDiv.addEventListener('click', () => {
    btnDiv.removeChild(replayDiv)
    btnATK.style.display = ""
    btnHeal.style.display = ""
    //Setup thông tin quái
    index = Math.floor(Math.random() * monJSON.length)
    pickMon = monJSON[index]
    monHP = pickMon.monHP
    monCurrentHP = monHP
    monATK = pickMon.monATK
    monDEF = pickMon.monDEF
    monName = pickMon.name
    //Setup thông tin player
    currentPlayerHP = playerHP
    // playerATK = JSON.parse(localStorage.getItem('info')).sRPGatk
    // playerDEF = JSON.parse(localStorage.getItem('info')).sRPGdef
    // playerHP = JSON.parse(localStorage.getItem('info')).sRPGhp
    infoLastATK.innerText = ""
    infoMon.innerHTML = `<div style="font-size: 19px"> Một con ${monName} đã xuất hiện. Chiến đấu thôi! </div>` + ` <div style="font-size:17.5px"> <b> ${monName} </b> </div> <div style="margin-left: 20px"> Tấn Công:  ${monATK} <br>Phòng Ngự: ${monDEF}<br>HP: ${monCurrentHP}/${monHP} </div>`
    infoPlayer.innerHTML = ` <div style="font-size:17.5px"> <b> ${JSON.parse(localStorage.getItem('info')).name} </b> </div> <div style="margin-left: 20px"> Level: ${currentLEVEL} <br> Tấn Công:  ${playerATK} <br>Phòng Ngự: ${playerDEF}<br>HP: ${currentPlayerHP}/${playerHP} </div>`
    currentPlayerBar.style.width = `100%`
    currentMonBar.style.width = `100%`
})

let exp = 0
let id = 0
async function checkID() {
    const myJSON = await getAPILogin()
    for (let i = 0; i < myJSON.length; i++) {
        if (myJSON[i]["username"] == userN) {
            id = i + 1
        }
    }
    exp = myJSON[id]["exp"]
}
let currentEXP = exp

btnATK.addEventListener('click', () => {
    let monDMG = Math.floor((monATK - playerDEF * (0.1 + Math.round(Math.random()))))
    let playerDMG = Math.floor((playerATK - monDEF * (0.1 + Math.round(Math.random()))))

    if (monDMG <= 0) monDMG = 0
    if (playerDMG <= 0) playerDMG = 0

    monCurrentHP = monCurrentHP - playerDMG
    currentPlayerHP = currentPlayerHP - monDMG

    if (monCurrentHP <= 0) monCurrentHP = 0
    if (currentPlayerHP <= 0) currentPlayerHP = 0

    let percentPlayerHP = (currentPlayerHP / playerHP) * 100
    let percentMonHP = (monCurrentHP / monHP) * 100

    if (percentPlayerHP >= 100) percentPlayerHP = 100

    currentPlayerBar.style.width = `${percentPlayerHP}%`
    currentMonBar.style.width = `${percentMonHP}%`

    infoLastATK.innerHTML = `<div style="margin-left: 20px">${monName} gây ${monDMG} sát thương cho bạn. <br>Bạn gây ${playerDMG} sát thương cho ${monName}</div>`

    if (monCurrentHP <= 0) {
        let exp = Math.floor(Math.random() * 3) + 1;
        infoLastATK.innerHTML = `<div style="margin-left: 20px">${monName} gây ${monDMG} sát thương cho bạn. <br>Bạn gây ${playerDMG} sát thương cho ${monName}<br>Bạn đã chiến thắng<br>Bạn nhận được ${exp} kinh nghiệm</div>`
        btnATK.style.display = "none"
        btnHeal.style.display = "none"
        btnDiv.appendChild(replayDiv)
        currentEXP += exp
        updateInfoAPI(id, currentEXP)
        if (currentEXP >= (level * 80)) {
            currentLEVEL++
            currentEXP = currentEXP - level * 100
            updateInfoAPI(id)
            infoLastATK.innerHTML = `<div style="margin-left: 20px">${monName} gây ${monDMG} sát thương cho bạn. <br>Bạn gây ${playerDMG} sát thương cho ${monName}<br>Bạn đã chiến thắng<br>Bạn nhận được ${exp} kinh nghiệm<br>Chúc mừng!! Bạn đã tăng đến cấp ${currentLEVEL}</div>`
        }
    }
    else if (currentPlayerHP <= 0) {
        infoLastATK.innerHTML = `<div style="margin-left: 20px">${monName} gây ${monDMG} sát thương cho bạn. <br>Bạn gây ${playerDMG} sát thương cho ${monName}<br>Bạn đã thất bại :< </div>`
        btnHeal.style.display = "none"
        btnATK.style.display = "none"
        btnDiv.appendChild(replayDiv)
    }
    infoMon.innerHTML = `<div style="font-size: 19px"> Một con ${monName} đã xuất hiện. Chiến đấu thôi! </div>` + ` <div style="font-size:17.5px"> <b> ${monName} </b> </div> <div style="margin-left: 20px"> Tấn Công:  ${monATK} <br>Phòng Ngự: ${monDEF}<br>HP: ${monCurrentHP}/${monHP} </div>`
    infoPlayer.innerHTML = ` <div style="font-size:17.5px"> <b> ${JSON.parse(localStorage.getItem('info')).name} </b> </div> <div style="margin-left: 20px"> Level: ${currentLEVEL} <br> Tấn Công:  ${playerATK} <br>Phòng Ngự: ${playerDEF}<br>HP: ${currentPlayerHP}/${playerHP} </div>`

})

btnHeal.addEventListener('click', () => {
    currentPlayerHP += 5
    if (currentPlayerHP > playerHP) {
        currentPlayerHP = playerHP
    }
    let percentPlayerHP = (currentPlayerHP / playerHP) * 100
    currentPlayerBar.style.width = `${percentPlayerHP}%`
    infoPlayer.innerHTML = ` <div style="font-size:17.5px"> <b> ${JSON.parse(localStorage.getItem('info')).name} </b> </div> <div style="margin-left: 20px"> Level: ${currentLEVEL} <br> Tấn Công:  ${playerATK} <br>Phòng Ngự: ${playerDEF}<br>HP: ${currentPlayerHP}/${playerHP} </div>`
})

//Gọi API để get thông tin
async function getAPILogin() {
    await fetch("https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator", {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => { value = data })
    return value
}

//Gọi API để update thông tin
async function updateInfoAPI(id) {
    var updateInfo = { "level": currentLEVEL, "exp": currentEXP }
    await fetch(`https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updateInfo)
    })
        .then(res => res.json())
        .then(data => { value = data })
}

async function updateInfoAPI(id, currentEXP) {
    var updateInfo = { "exp": currentEXP }
    await fetch(`https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updateInfo)
    })
        .then(res => res.json())
        .then(data => { value = data })
}

checkID()
setupMonster()
setupPlayer()