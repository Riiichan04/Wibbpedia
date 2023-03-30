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
    document.getElementById("gachatitle").style.height = "100%"
    document.getElementById("gachatitle").style.marginLeft = "auto"

    document.getElementById("gachaparagraph").innerHTML = paragraph[ranIndex]
    document.getElementById("gachaparagraph").style.width = "100%"
    document.getElementById("gachaparagraph").style.height = "100%"
}
//Minikoma
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

function random1koma() {
    var pjsk1koma = new Array()
    for (var i = 0; i < 40; i++) {
        pjsk1koma.push(`BackupData/IMG/1koma/1koma${i}.jpg`)
    }
    var index1koma = Math.floor(Math.random() * pjsk1koma.length)
    var ran1koma = pjsk1koma[index1koma]
    document.getElementById("gacha1koma").src = ran1koma
    document.getElementById("gacha1koma").style.width = "100%"
    document.getElementById("gacha1koma").style.height = "100%"
}

//Music
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

var musicPlay = document.getElementById("musicPlay")
var musicButton = document.getElementById("randomMusic")
var nextMusic = document.getElementById("nextMusic")
var prevMusic = document.getElementById("prevMusic")
var pauseMusic = document.getElementById("pauseMusic")

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

pauseMusic.addEventListener("click", () => {
    if (musicPlay.paused) {
        musicPlay.play()
        pauseMusic.className = "fa-solid fa-pause"
        document.getElementById("nameMusic").innerHTML = `Đang phát ${nameAlbum[ranIndex]}`
    }
    else {
        musicPlay.pause()
        pauseMusic.className = "fa-solid fa-play"
        document.getElementById("nameMusic").innerHTML = `Đang tạm ngừng ${nameAlbum[ranIndex]}`
    }
})

//Làm ProgressBar
function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
var progressBar = document.getElementById("progressMusic")
musicPlay.addEventListener('loadeddata', () => {
    var duration = musicPlay.duration
    progressBar.innerHTML = `0:00/${formatDuration(duration)}`
})
musicPlay.addEventListener('timeupdate', () => {
    var currentTime = musicPlay.currentTime
    var duration = musicPlay.duration
    progressBar.innerHTML = `${formatDuration(currentTime)}/${formatDuration(duration)}`
})

//Check ban đầu đã nhấn play chưa
function checkPlayedMusic() {
    if (!musicPlay.played) {
        pauseMusic.className = "fa-solid fa-pause"
        // document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát ${nameAlbum[ranIndex]}`
    }
    else {
        pauseMusic.className = "fa-solid fa-play"
        // document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát ${nameAlbum[ranIndex]}`
    }
}

checkPlayedMusic()
randomThumb()
random1koma()
random4koma()
randomMusic()
