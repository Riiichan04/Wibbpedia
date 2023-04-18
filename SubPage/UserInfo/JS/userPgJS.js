//InfoBox
const avtBox = document.getElementById("infoBox_avatar")
const nickName = document.getElementById("nickName")
const userName = document.getElementById("userName")

//List BTN
const changeAVT = document.getElementById("changeAVT")
const changeUN = document.getElementById("changeUN")
const changeSN = document.getElementById("changeSN")
const changePASS = document.getElementById("changePASS")

//Tạm Disable 3 chức năng còn lại
changeUN.disabled = true
changeSN.disabled = true
changePASS.disabled = true

//Nền khi mở popup
const popupFilter = document.getElementById("popupFilter")
//ListPopup
const popupAVT = document.getElementById("popupAVT")
const popupUN = document.getElementById("popupUN")
const popupSN = document.getElementById("popupSN")
const popupPASS = document.getElementById("popupPASS")

//PopupAVT
const inputText = document.getElementById("inputText")
const errAVT = document.getElementById("errAVT")
const previewAvt = document.getElementById("previewAvt")
const notice = document.getElementById("notice")

//List BTN
const cancelAVT = document.getElementById("cancelAVT")
const confirmAVT = document.getElementById("confirmAVT")

//Nạp hình và thông tin vào userbox
avtBox.src = JSON.parse(localStorage.getItem('info')).avatar
nickName.innerHTML ="@" +  JSON.parse(localStorage.getItem('info')).username
userName.innerHTML =JSON.parse(localStorage.getItem('info')).name

//Mở popup thayAVT
changeAVT.addEventListener('click', () => {
    popupFilter.style.display = ""
    popupAVT.style.display = ""
    previewAvt.src = JSON.parse(localStorage.getItem('info')).avatar
})

//Đóng popup thayAVT
cancelAVT.addEventListener('click', () => {
    popupFilter.style.display = "none"
    popupAVT.style.display = "none"
    previewAvt.src = JSON.parse(localStorage.getItem('info')).avatar
    notice.innerText = ""
    inputText.value = ""
})

let url = inputText.value.trim()
//Check đường dận nhập vào
var isAvatar = false
var isLoaded = false
inputText.oninput = async () => {
    isLoaded = false //Mỗi lần nhập input sẽ quay lại false
    previewAvt.addEventListener('load', () => {
        isLoaded = true
    })
    if (await isImage(inputText.value.trim())) {
        isAvatar = true
        previewAvt.src = inputText.value.trim()
        errAVT.textContent = ""
    }
    else {
        isAvatar = false
        errAVT.textContent = "URL không hợp lệ! Hãy nhập URL hợp lệ."
    }
}

const nickN = JSON.parse(localStorage.getItem('info')).name
const userN = JSON.parse(localStorage.getItem('info')).username
let id = 0
async function checkID() {
    const myJSON = await getAPILogin()
    for (let i = 0; i < myJSON.length; i++) {
        if (myJSON[i]["username"] == userN) {
            id = i+1
        }
    }
}

//Chọn hình ảnh từ file
function previewFile() {
    isAvatar = false
    isLoaded = false
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        previewAvt.src = reader.result;
        inputText.disabled = true
        isAvatar = true
        isLoaded = true
        inputText.value = reader.result
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
    
}



//Xác nhận thayAVT
confirmAVT.addEventListener('click', () => {
    if (inputText.value.trim() == "" && document.querySelector('input[type=file]') == "") { //
        errAVT.textContent = "Chưa có hình ảnh"
    }
    else if (isAvatar == false || isLoaded == false) {
        errAVT.textContent = "URL bạn nhập không phải hình ảnh!"
    }
    else {
        errAVT.textContent = ""
        notice.textContent = "Thay avatar thành công!"
        updateAvatarAPI(id, inputText.value.trim())
        isAvatar = false
        var updateJSON = {
            "name": nickN,
            "username": userN,
            "avatar": inputText.value.trim()
        }
        inputText.value = ""
        setTimeout(() => {
            localStorage.setItem('info', JSON.stringify(updateJSON))
            popupFilter.style.display = "none"
            popupAVT.style.display = "none"
            notice.textContent = ""
            errAVT.textContent = ""
            userAVT.src = JSON.parse(localStorage.getItem('info')).avatar
            previewAvt.src = JSON.parse(localStorage.getItem('info')).avatar
            avtBox.src = JSON.parse(localStorage.getItem('info')).avatar
        }, 1500)
    }
})

//Gọi API để get thông tin
async function getAPILogin() {
    await fetch("https://643306c5d0127730d2dfbfe7.mockapi.io/UserOperator", {
            method: 'GET',
            headers: { 'content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {value = data})
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

function checkString() {
    if (inputText.value.trim() == "") {
        previewAvt.src = JSON.parse(localStorage.getItem('info')).avatar
    }
}

function isImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = url;
    });
}

checkID()
checkString()