// const path = require('node:path');
//Random hình ảnh sẽ xuất hiện lên div
function randomThumb() {
    var image = new Array();
    //Add hình vào mảng
    image.push("/BackupData/IMG/At_Least_There's_A_Moment_Of_Peace.webp")
    image.push("/BackupData/IMG/Determination_Ignited.webp")
    image.push("/BackupData/IMG/Recreational_Shopping.webp")
    image.push("/BackupData/IMG/Determination_Ignited_T.webp")

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
    document.getElementById("gachatitle").style.height = "100%"
    document.getElementById("gachatitle").style.marginLeft = "auto"

    document.getElementById("gachaparagraph").innerHTML = paragraph[ranIndex]
    document.getElementById("gachaparagraph").style.width = "100%"
    document.getElementById("gachaparagraph").style.height = "100%"
}

function random4koma() {
    var pjsk4koma = new Array()
    for (var i = 0; i < 99; i++) {
        pjsk4koma.push(`BackupData/IMG/4koma/pjsk/4koma_${i}_en.jpg`)
    }
    var index4koma = Math.floor(Math.random() * pjsk4koma.length)
    var ran4koma = pjsk4koma[index4koma]
    document.getElementById("gacha4koma").src = ran4koma
    document.getElementById("gacha4koma").style.width = "100%"
    document.getElementById("gacha4koma").style.height = "100%"
}

var musicList = new Array()
musicList.push("./BackupData/Audio/Kirari.mp3")
musicList.push("./BackupData/Audio/NIGHTDANCER_DAZBEEcover.mp3")
musicList.push("./BackupData/Audio/AdoOverdose.mp3")
musicList.push("./BackupData/Audio/FishInThePool_DAZBEE(Cover).mp3")
musicList.push("./BackupData/Audio/KanadeTomosuSora_Kanade.mp3")
musicList.push("./BackupData/Audio/AsunoYozoraShoukaihan_HoshinoIchika.mp3")
musicList.push("./BackupData/Audio/Matsuri_FujiiKaze.mp3")

var nameAlbum = new Array()
nameAlbum.push("Kirari - Fujii Kaze")
nameAlbum.push("NIGHT DANCER - DAZBEE Cover")
nameAlbum.push("Overdose - Ado Cover")
nameAlbum.push("fish in the pool - DAZBEE Cover")
nameAlbum.push("Kanade Tomosu Sore - Yoisaki Kanade")
nameAlbum.push("Asu no Yozora Shoukaihan - Hoshino Ichika")
nameAlbum.push("Matsuri - Fujii Kaze")

var ranIndex = Math.floor(Math.random() * musicList.length)
var ranMusic = musicList[ranIndex]

function randomMusic() {
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát ${nameAlbum[ranIndex]}`
}

var musicButton = document.getElementById("randomMusic")
var nextMusic = document.getElementById("nextMusic")
var prevMusic = document.getElementById("prevMusic")

//MusicBox
musicButton.addEventListener("click", () => {
    // var ranValue = ranIndex
    var ranIndex = Math.floor(Math.random() * musicList.length)
    // while (ranValue == ranIndex) {
    //     ranIndex = Math.floor(Math.random() * musicList.length)
    // }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát ${nameAlbum[ranIndex]}`


})

nextMusic.addEventListener("click", () => {
    ranIndex++
    if (ranIndex >= musicList.length) {
        ranIndex = 0
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát ${nameAlbum[ranIndex]}`
})

prevMusic.addEventListener("click", () => {
    ranIndex--
    if (ranIndex < 0) {
        ranIndex = musicList.length - 1
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát ${nameAlbum[ranIndex]}`
})


randomThumb()
random4koma()
randomMusic()