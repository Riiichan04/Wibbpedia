const avtBox = document.getElementById("infoBox_avatar")
const nickName = document.getElementById("nickName")
const userName = document.getElementById("userName")
const confirmchangeAVT = document.getElementById("confirmChangeAvt")
const changeavt = document.getElementById("changeavt")
const result = document.getElementById("result")

avtBox.src = JSON.parse(localStorage.getItem('info')).avatar
userName.innerHTML = JSON.parse(localStorage.getItem('info')).username
nickName.innerHTML ="@" + JSON.parse(localStorage.getItem('info')).name

confirmchangeAVT.onclick = async() => {
    if (localStorage.length > 0) {
        const myJSON = getAPILogin(1)

        for (var i = 0; i < myJSON.length; i++) {
            if (JSON.parse(localStorage.getItem('info')).username == myJSON[i]["username"]) {
                res = i
            }
        }

        var putJSON = {
            "avatar": changeavt.value.trim()
        }
        getAPILogin(4, putJSON)
        result.innerHTML = "Đổi avatar thành công"
    }
}


//Tạo token để lấy API ra
async function getAPILogin(type, x) {
    var value
    if (type == 1) {
        await fetch("https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator", {
            method: 'GET',
            headers: { 'content-type': 'application/json'}
        }).then(res => res.json().then(data => {
            value = data
        }))
    }
    if (type == 2) {
        await fetch("https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator", {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(x)
        }).then(res => res.json().then(data => {
            value = data
        }))
    }
    if (type == 3) {
        await fetch("https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator", {
            method: 'DELETE'
        }).then(res => res.json().then(data => {
            value = data
        }))
    }
    return value
}

//Gọi API để update thông tin
async function updateAvatarAPI(id, url) {
    var updateInfo = { "avatar": url}
    await fetch(`https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(data => {value = data})
}