const signUpBtn = document.getElementById("signupbtn")
const trans = document.getElementById("scrollBox")
const mainframe = document.getElementById("mainForm")
const backlogin = document.getElementById("backlogin")
const boxSwitch = document.getElementById("boxSwitch")
const confirmBtn = document.getElementsByClassName("userForm_btnControl")
const notice = document.getElementsByClassName("notice")

//Đăng Nhập
const logU = document.getElementById("logU")
const passU = document.getElementById("passU")
//Đăng Ký
const nickR = document.getElementById("nickR")
const userR = document.getElementById("useR")
const passR = document.getElementById("passR")
const passRR = document.getElementById("rpeatR")

//Chuyển Frame
signUpBtn.onclick = () => {
    trans.style.translate = "-380px 0"
    mainframe.style.height = "380px"
    mainframe.style.width = "400px"
    boxSwitch.style.width = "425px"
}

backlogin.onclick = () => {
    trans.style.translate = "none"
    mainframe.style.height = "250px"
    mainframe.style.width = "360px"
}
let count = 0
//Đăng Nhập
var waitLog = false
confirmBtn[0].onclick = async() => {
    if (waitLog == false) {
        if (logU.value == "" || passU.value == "") {
            notice[0].innerHTML = "Hãy nhập đủ thông tin!!"
        }
        else {
            var myJSON = await getAPILogin(1)
            if (myJSON.length <= 0) {
                notice[0].innerHTML = "Tài khoản chưa được đăng ký!"
            }
            else {
                var check = false
                //Kiểm tra trong API xem có trùng username và pass không
                for (let i = 0; i < myJSON.length; i++) {
                    if (myJSON[i]["username"] == logU.value.trim() && myJSON[i]["password"] == passU.value.trim()) {
                        check = true
                        var localJSON = {
                            "name": myJSON[i]["nickname"],
                            "username": myJSON[i]["username"],
                            "avatar": myJSON[i]["avatar"]
                        }
                        localJSON = JSON.stringify(localJSON)
                        localStorage.setItem("info", localJSON)
                        waitLog = true
                        setTimeout( ()=> {
                            notice[0].style.color = "#f29bd4"
                            notice[0].innerHTML = "Đăng nhập thành công!"
                            window.location = `https://riiichan04.github.io/Wibbpedia/userFeed.html`
                        }, 600)
                    }
                }
                //Sau khi kiểm xong và check = false -> Không đăng nhập được
                if (check == false) {
                    notice[0].innerHTML = "Thông tin bạn nhập không đúng"
                    count++
                }
                if (count == 5) {
                    notice[0].innerHTML = `Thông tin bạn nhập không đúng 5 lần rồi!!! Bạn hãy bấm vào "Quên mật khẩu" để được trợ giúp nha!`
                }
            }
        }
    }
}

//Đăng Ký
var waitCreate = false
confirmBtn[1].onclick = async() => {
    if (waitCreate == false) {
        var auth = true
        var myJSON = await getAPILogin(1)
        //Check user đã ghi đủ thông tin chưa
        if (nickR.value.trim() == "" || userR.value.trim() == "" || passR.value.trim() == "" || passRR.value.trim() == "") {
            notice[1].innerHTML = "Hãy nhập đủ thông tin!!"
            auth = false
        }
        //Nếu đủ rồi thì check các điều kiện khác
        if (auth == true) {
            //Username không được rỗng
            if (nickR.value.trim().length < 1) {
                notice[1].innerHTML = "Username không được rỗng"
                auth = false
            }
        }
        if (auth == true) {
            //Tên đăng nhập phải >= 6 ký tự
            if (userR.value.trim().length < 6) {
                notice[1].innerHTML = "Tên đăng nhập phải nhiều hơn 6 ký tự"
                auth = false
            }
        }
        if (auth == true) {
            //Check mật khẩu
            if (passR.value.trim().length < 8 || passR.value.trim().length > 30) {
                notice[1].innerHTML = "Mật khẩu có độ dài từ 8 - 30 ký tự"
                auth = false
            }
        }
        if (auth == true) {
            //Check xác nhận mật khẩu có trùng khớp không
            if (passR.value.trim() != passRR.value.trim()) {
                notice[1].innerHTML = "Nhập lại mật khẩu không khớp"
                auth = false
            }
        }
        if (auth == true && myJSON.length > 0) {
            //Kiểm tra xem có trùng username không
            for (let i = 0; i < myJSON.length; i++) {
                if (myJSON[i]["username"] == userR.value.trim()) {
                    notice[1].innerHTML = "Tên đăng nhập đã trùng. Bạn hãy dùng tên đăng nhập khác nhé"
                    auth = false
                    break
                }
            }
        }
        if (auth == true) {
            notice[1].innerHTML = "Đăng ký thành công!"
            notice[1].style.color = "#f29bd4"
            var postJSON = {
                "username": userR.value.trim(),
                "password": passR.value.trim(),
                "nickname": nickR.value.trim(),
                "avatar": "https://media.tenor.com/oudJ-ckzZLMAAAAC/bocchi-the-rock-kita-ikuyo.gif"
            }
            getAPILogin(2, postJSON)
            waitCreate = true

            setTimeout(() => {
                backlogin.onclick()
                logU.value = userR.value.trim()
            }, 2500)
        }
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