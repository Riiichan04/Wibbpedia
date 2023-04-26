//Check xem đăng nhập chưa
var signed = document.getElementsByClassName("signined")
var userAVT = document.getElementById("userAVT")
if (localStorage.length > 0) {
    console.log(localStorage)
    signed[1].style.display = "none"
    signed[0].style.display = "none"
    const userPopup = document.getElementById("userPopup")
    userPopup.style.display = ""
    userPopup.innerHTML = `<i class="fa-regular fa-user icon-header"></i> <u class="headlistitem_item usertext", style="text-decoration: underline;"">${JSON.parse(localStorage.getItem('info')).name}</u>`
    userAVT.src = JSON.parse(localStorage.getItem('info')).avatar
}
else {
    signed[1].style.display = ""
    signed[0].innerHTML = `<li class="headlistitem signined">
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <a href="SubPage/Login/loginPage.html" class="headlistitem_item"> Đăng Nhập
            </a>
        </li>`
}