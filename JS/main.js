// const path = require('node:path');
//Random hình ảnh sẽ xuất hiện lên div
function randomThumb() {
    var image = new Array();
    //Add hình vào mảng
    image.push("BackupData/IMG/At_Least_There's_A_Moment_Of_Peace.jpg")
    image.push("BackupData/IMG/Determination_Ignited.jpg")
    image.push("BackupData/IMG/Recreational_Shopping.jpg")
    image.push("BackupData/IMG/Determination_Ignited_T.jpg")

    //Xử lý hình ảnh
    var ranIndex = Math.floor(Math.random() * image.length)
    var randomImg = image[ranIndex]
    document.getElementById("gachaimg").src = randomImg
    document.getElementById("gachaimg").style.width = "100%"
    document.getElementById("gachaimg").style.height = "100%"
    document.getElementById("gachaimg").style.borderRadius = "10px"

    //Xử lý tiêu đề và nội dung
    var title = new Array()
    title.push("Một Khoảnh Khắc Yên Bình")
    title.push("Bùng Cháy Phẫn Nộ")
    title.push("Sức Sống Tuổi Trẻ")
    title.push("Bảo Vệ Tình Yêu")

    var paragraph = new Array()
    paragraph.push("Giữa những bộn bề của cuộc sống. Hãy cố gắng tận hưởng mọi khoảnh khắc yên bình khi có thể.")
    paragraph.push("Khi đã tức nước vỡ bờ, những cảm xúc bị che giấu sâu thẳm trong tâm hồn ta sẽ trỗi dậy, mạnh mẽ và điên cuồng")
    paragraph.push("Tận hưởng tuổi trẻ trước khi quá muộn. Đó là cách để ta tìm thấy niềm vui")
    paragraph.push("Ôm lấy và bảo vệ tình yêu mà người đó dành cho mình... Điều đó có chăng cũng là lẽ thường tình")

    document.getElementById("gachatitle").innerHTML = title[ranIndex]
    document.getElementById("gachatitle").style.width = "100%"
    // document.getElementById("gachatitle").style.height = "100%"
    // document.getElementById("gachatitle").style.marginLeft = "auto"

    document.getElementById("gachaparagraph").innerHTML = paragraph[ranIndex]
    document.getElementById("gachaparagraph").style.width = "100%"
    document.getElementById("gachaparagraph").style.height = "100%"
}
//Minikoma
function random4koma() {
    var pjsk4koma = new Array()
    for (var i = 0; i < 99; i++) {
        pjsk4koma.push(`BackupData/IMG/4koma/pjsk/4koma_${i+1}_en.jpg`)
    }
    var index4koma = Math.floor(Math.random() * pjsk4koma.length)
    var ran4koma = pjsk4koma[index4koma]
    document.getElementById("gacha4koma").src = ran4koma
    document.getElementById("gacha4koma").style.width = "100%"
    document.getElementById("gacha4koma").style.height = "100%"
}

function random1koma() {
    var pjsk1koma = new Array()
    for (var i = 0; i < 40; i++) {
        pjsk1koma.push(`BackupData/IMG/1koma/1koma${i+1}.jpg`)
    }
    var index1koma = Math.floor(Math.random() * pjsk1koma.length)
    var ran1koma = pjsk1koma[index1koma]
    document.getElementById("gacha1koma").src = ran1koma
    document.getElementById("gacha1koma").style.width = "100%"
    document.getElementById("gacha1koma").style.height = "100%"
}

function setCookies() {
    document.cookie = "gachauser"
}

//Check xem đăng nhập chưa
var signed = document.getElementsByClassName("signined")
if (localStorage.length > 0) {
    console.log(localStorage)
    signed[1].style.display = "none"
    signed[0].style.display = "none"
    const userPopup = document.getElementById("userPopup")
    userPopup.style.display = ""
    userPopup.innerHTML = `<i class="fa-regular fa-user icon-header"></i> <u class="headlistitem_item usertext", style="text-decoration: underline;"">${JSON.parse(localStorage.getItem('info')).username}</u>`
}
else {
    signed[1].style.display = ""
    signed[0].innerHTML = `<li class="headlistitem signined">
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <a href="SubPage/Login/loginPage.html" class="headlistitem_item"> Đăng Nhập
            </a>
        </li>`
}
setCookies()
randomThumb()
random1koma()
random4koma()

