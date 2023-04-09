//Music
var musicList = new Array()
musicList.push("BackupData/Audio/Kirari.mp3")
musicList.push("BackupData/Audio/NIGHTDANCER_DAZBEEcover.mp3")
musicList.push("BackupData/Audio/AdoOverdose.mp3")
musicList.push("BackupData/Audio/FishInThePool_DAZBEE(Cover).mp3")
musicList.push("BackupData/Audio/KanadeTomosuSora_Kanade.mp3")
musicList.push("BackupData/Audio/AsunoYozoraShoukaihan_HoshinoIchika.mp3")
musicList.push("BackupData/Audio/Matsuri_FujiiKaze.mp3")
musicList.push("BackupData/Audio/ZamzaNiigoKaito.mp3")
musicList.push("BackupData/Audio/HaruWoTsugeruYama.mp3")
musicList.push("BackupData/Audio/OsmanthusAdo.mp3")
musicList.push("BackupData/Audio/BloodFlowYama.mp3")
musicList.push("BackupData/Audio/flosOkayu.mp3")
musicList.push("BackupData/Audio/IkanaideOkayu.mp3")
musicList.push("BackupData/Audio/KakuseiSuisei.mp3")
musicList.push("BackupData/Audio/KataomoiAimer.mp3")
musicList.push("BackupData/Audio/OnajiHanashi.mp3")


var nameAlbum = new Array()
nameAlbum.push("Kirari - Fujii Kaze")
nameAlbum.push("NIGHT DANCER - DAZBEE Cover")
nameAlbum.push("Overdose - Ado Cover")
nameAlbum.push("fish in the pool - DAZBEE Cover")
nameAlbum.push("Kanade Tomosu Sore - Yoisaki Kanade")
nameAlbum.push("Asu no Yozora Shoukaihan - Hoshino Ichika")
nameAlbum.push("Matsuri - Fujii Kaze")
nameAlbum.push("Zamza - Nightcord at 25h ft.KAITO")
nameAlbum.push("Haru wo Tsugeru - Yama")
nameAlbum.push("Osmanthus - Ado")
nameAlbum.push("Blood Flow - Yama")
nameAlbum.push("Flos - Nekomata Okayu Cover")
nameAlbum.push("Ikanaide (Piano) - Nekomata Okayu Cover")
nameAlbum.push("Kakusei - Suisei Cover")
nameAlbum.push("Kataomoi - Aimer")
nameAlbum.push("OnajiHanashi - Kain & Blanc Cover")

var imgAlbum = new Array()
imgAlbum.push("BackupData/IMG/AudioIMG/Kirari.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/NIGHTDANCER.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/AdoOverdose.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/fish_in_the_pool.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/KanadeTomosuSora.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/AsunoYozoraShoukaihan.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Matsuri.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Zamza.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/HaruWoTsugeru.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Osmanthus.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/BloodFlow.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/flos.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Ikanaide.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Kakusei.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/Kataomoi.jpg")
imgAlbum.push("BackupData/IMG/AudioIMG/OnajiHanashi.jpg")

var ranIndex = Math.floor(Math.random() * musicList.length)
var ranMusic = musicList[ranIndex]

function randomMusic() {
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát <b>${nameAlbum[ranIndex]}</b>`
}

var musicPlay = document.getElementById("musicPlay")
var musicRandom = document.getElementById("randomMusic")
var nextMusic = document.getElementById("nextMusic")
var prevMusic = document.getElementById("prevMusic")
var pauseMusic = document.getElementById("pauseMusic")
var autoMusic = document.getElementById("autoMusic")
var thumbMusic = document.getElementById("thumbMusic")
var thumbPopup = document.getElementById("thumbMusicPopup")

//ThumbnalMusicBox
function thumbnailMusic() {
    thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbMusic.style.backgroundSize = "100%"

    thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbPopup.style.backgroundSize = "100%"
}

//MusicBox
musicRandom.addEventListener("click", () => {
    // var ranValue = ranIndex
    ranIndex = Math.floor(Math.random() * musicList.length)
    // while (ranValue == ranIndex) {
    //     ranIndex = Math.floor(Math.random() * musicList.length)
    // }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát: <b>${nameAlbum[ranIndex]}</b>`

    thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
})

nextMusic.addEventListener("click", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
    ranIndex++
    if (ranIndex >= musicList.length) {
        ranIndex = 0
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát: <b>${nameAlbum[ranIndex]}</b>`
    pauseMusic.className = "fa-solid fa-play"
    var progressReal = document.getElementById("reallyProgress")
    progressReal.style.width = "0%"
    thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbMusic.style.animation = "none"
    thumbPopup.style.animation = "none"
    popupMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
})

prevMusic.addEventListener("click", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
    ranIndex--
    if (ranIndex < 0) {
        ranIndex = musicList.length - 1
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát: <b>${nameAlbum[ranIndex]}</b>`
    pauseMusic.className = "fa-solid fa-play"
    var progressReal = document.getElementById("reallyProgress")
    progressReal.style.width = "0%"
    thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    thumbMusic.style.animation = "none"
    thumbPopup.style.animation = "none"
    popupMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
})

pauseMusic.addEventListener("click", () => {
    if (musicPlay.paused) {
        musicPlay.play()
        pauseMusic.className = "fa-solid fa-pause"
        document.getElementById("nameMusic").innerHTML = `Đang phát: <b>${nameAlbum[ranIndex]}</b>`
        thumbMusic.style.animation = "rorateDisk 5s linear infinite"
        thumbPopup.style.animation = "rorateDisk 5s linear infinite"
    }
    else {
        musicPlay.pause()
        pauseMusic.className = "fa-solid fa-play"
        document.getElementById("nameMusic").innerHTML = `Đang tạm ngừng: <b>${nameAlbum[ranIndex]}</b>`
        thumbMusic.style.animationPlayState = "paused"
        thumbPopup.style.animationPlayState = "paused"
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
    var progressReal = document.getElementById("reallyProgress")
    var currentTime = musicPlay.currentTime
    var duration = musicPlay.duration
    progressBar.innerHTML = `${formatDuration(currentTime)}/${formatDuration(duration)}`
    var progress = (currentTime / duration) * 100
    progressReal.style.width = progress + "%"
})

musicPlay.addEventListener('ended', () => {
    pauseMusic.className = "fa-solid fa-play"
    document.getElementById("nameMusic").innerHTML = `Đã phát xong: <b>${nameAlbum[ranIndex]}</b>`
    thumbMusic.style.animation = "none"
    thumbPopup.style.animation = "none"
})

musicPlay.addEventListener("load", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
})
//Check ban đầu đã nhấn play chưa
function checkPlayedMusic() {
    if (!musicPlay.played) pauseMusic.className = "fa-solid fa-pause"
    else pauseMusic.className = "fa-solid fa-play"
}
//Add event cho progress bar
var progressReal = document.getElementById("reallyProgress")
var progressTrue = document.getElementById("timingProgress")
progressTrue.addEventListener("click", (e) => {
    var x = e.clientX - progressReal.offsetParent.offsetLeft
    var width = progressTrue.clientWidth
    var percent = Math.floor((x / width) * 100)

    progressReal.style.width = percent + "%"

    if (!musicPlay.played) {
        musicPlay.play()
        musicPlay.currentTime = (percent / 100) * musicPlay.duration
    }
    else musicPlay.currentTime = (percent / 100) * musicPlay.duration
})
//Làm nút tăng giảm âm lượng
var volUp = document.getElementById("volUp")
var volDown = document.getElementById("volDown")
volUp.addEventListener("click", () => {
    var currentVolume = document.getElementById("volValue").innerHTML
    var volumeInt = parseInt(currentVolume)
    if (volumeInt == 10) {
        musicPlay.volume = 1
    }
    else {
        musicPlay.volume = musicPlay.volume + 0.1
        document.getElementById("volValue").innerHTML = ++volumeInt
    }
})
volDown.addEventListener("click", () => {
    var currentVolume = document.getElementById("volValue").innerHTML
    var volumeInt = parseInt(currentVolume)
    if (volumeInt == 0) {
        musicPlay.volume = 0
    }
    else {
        musicPlay.volume = musicPlay.volume - 0.1
        document.getElementById("volValue").innerHTML = --volumeInt
    }
})

//Event khi click vào ô nhạc
let bgBlur = document.getElementById("bgblur")
function openMusicPopup() {
    var popupMusic = document.getElementById("popupMusic")
    popupMusic.style.display = ""
    popupMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    popupMusic.style.backgroundSize = "100%"
}
var closePopup = document.getElementById("closePopup")
closePopup.addEventListener("click", () => {
    popupMusic.style.display = "none"
})


thumbnailMusic()
randomMusic()
checkPlayedMusic()