const signUpBtn = document.getElementById("signupbtn")
const trans = document.getElementById("scrollBox")
const mainframe = document.getElementById("mainForm")
const backlogin = document.getElementById("backlogin")
const boxSwitch = document.getElementById("boxSwitch")

signUpBtn.onclick = () => {
    trans.style.translate = "-380px 0"
    mainframe.style.height = "380px"
    mainframe.style.width = "450px"
    boxSwitch.style.width = "425px"
}

backlogin.onclick = () => {
    trans.style.translate = "none"
    mainframe.style.height = "250px"
    mainframe.style.width = "360px"

}