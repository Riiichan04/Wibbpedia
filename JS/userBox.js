const logout = document.getElementById("logout")
const changeavt = document.getElementById("changeavt")
const userPopup = document.getElementById("userPopup")
const userinfo = document.getElementById("userinfo")
const closeUserPopup = document.getElementById("closeUserPopup")
const infouser = document.getElementById("infouser")
const username = document.getElementById("username")
const nickname = document.getElementById("nickname")

//Thông tin trên popup
nickname.innerHTML = "@"+JSON.parse(localStorage.getItem('info')).username
username.innerHTML = JSON.parse(localStorage.getItem('info')).name
//Mở popup
userPopup.addEventListener("click", () => {
    userinfo.style.display = ""
})
//Đóng popup
closeUserPopup.addEventListener("click", () => {
    userinfo.style.display = "none"
})
//Thay AVT
changeavt.addEventListener("click", () => {
    window.location = "https://riiichan04.github.io/Wibbpedia/SubPage/UserInfo/userPage.html"
})
//Đăng Xuất
logout.addEventListener("click", () => {
    localStorage.clear()
    signed[1].style.display = ""
    signed[0].style.display = ""
    userinfo.style.display = "none"
    userPopup.style.display = "none"
    window.location = `https://riiichan04.github.io/Wibbpedia`
})