//Music
var musicList = new Array()
musicList.push("/BackupData/Audio/Kirari.mp3")
musicList.push("/BackupData/Audio/NIGHTDANCER_DAZBEEcover.mp3")
musicList.push("/BackupData/Audio/AdoOverdose.mp3")
musicList.push("/BackupData/Audio/FishInThePool_DAZBEE(Cover).mp3")
musicList.push("/BackupData/Audio/KanadeTomosuSora_Kanade.mp3")
musicList.push("/BackupData/Audio/AsunoYozoraShoukaihan_HoshinoIchika.mp3")
musicList.push("/BackupData/Audio/Matsuri_FujiiKaze.mp3")
musicList.push("/BackupData/Audio/ZamzaNiigoKaito.mp3")

var nameAlbum = new Array()
nameAlbum.push("Kirari - Fujii Kaze")
nameAlbum.push("NIGHT DANCER - DAZBEE Cover")
nameAlbum.push("Overdose - Ado Cover")
nameAlbum.push("fish in the pool - DAZBEE Cover")
nameAlbum.push("Kanade Tomosu Sore - Yoisaki Kanade")
nameAlbum.push("Asu no Yozora Shoukaihan - Hoshino Ichika")
nameAlbum.push("Matsuri - Fujii Kaze")
nameAlbum.push("Zamza - Nightcord at 25h ft.KAITO")

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
    document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát: ${nameAlbum[ranIndex]}`


})

nextMusic.addEventListener("click", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
    ranIndex++
    if (ranIndex >= musicList.length) {
        ranIndex = 0
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Chuẩn bị phát: ${nameAlbum[ranIndex]}`
    pauseMusic.className = "fa-solid fa-play"
})

prevMusic.addEventListener("click", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
    ranIndex--
    if (ranIndex < 0) {
        ranIndex = musicList.length - 1
    }
    var ranMusic = musicList[ranIndex]
    document.getElementById("musicPlay").src = ranMusic
    document.getElementById("nameMusic").innerHTML = `Đang phát: ${nameAlbum[ranIndex]}`
    pauseMusic.className = "fa-solid fa-play"
})

pauseMusic.addEventListener("click", () => {
    if (musicPlay.paused) {
        musicPlay.play()
        pauseMusic.className = "fa-solid fa-pause"
        document.getElementById("nameMusic").innerHTML = `Đang phát: ${nameAlbum[ranIndex]}`
    }
    else {
        musicPlay.pause()
        pauseMusic.className = "fa-solid fa-play"
        document.getElementById("nameMusic").innerHTML = `Đang tạm ngừng: ${nameAlbum[ranIndex]}`
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
musicPlay.addEventListener('ended', () => {
    pauseMusic.className = "fa-solid fa-play"
    document.getElementById("nameMusic").innerHTML = `Đã phát xong: ${nameAlbum[ranIndex]}`
})
musicPlay.addEventListener("load", () => {
    progressBar.innerHTML = `Đang chuyển bài, chờ tí nhé!!`
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
randomMusic()
checkPlayedMusic()