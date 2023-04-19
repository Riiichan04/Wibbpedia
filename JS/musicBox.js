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
nameAlbum.push("Kanade Tomosu Sora - Yoisaki Kanade")
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
imgAlbum.push("BackupData/IMG/AudioIMG/OverdoseAdo.jpg")
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

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].localeCompare(arr[j+1]) > 0) {
                x = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = x
            }
        }
    }
}
bubbleSort(nameAlbum)
bubbleSort(musicList)
bubbleSort(imgAlbum)

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
    var x = e.clientX - progressReal.offsetParent.offsetParent.offsetLeft
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

//Mở list album nhạc đang phát:
// const showAlbumBTN = document.getElementById("showAlbumBTN")
// const mainPopup = document.getElementById("mainPopup")
// const subPopup = document.getElementById("subPopup")
// const iconShowAlbumBTN = showAlbumBTN.querySelector("i")
// let isAlbumOn = false
// showAlbumBTN.addEventListener('click', () => {
//     if (!isAlbumOn) {
//         isAlbumOn = true
//         iconShowAlbumBTN.style.rotate = '180deg'
//         subPopup.style.display = "block"
//         setTimeout(() => {
//             subPopup.style.opacity = 1
//         }, 250)
//         thumbPopup.style.width = "0%"
//         thumbPopup.style.border = '0'
        
//     }   
//     else {
//         isAlbumOn = false
//         subPopup.style.opacity = 0
//         setTimeout(() => {
//             subPopup.style.display = 'none'
//         }, 250)
//         iconShowAlbumBTN.style.rotate = '0deg'
//         thumbPopup.style.width = "15rem"
//         thumbPopup.style.border = "solid 2px"
//     }
// })



//Chọn ngẫu nhiên nhạc làm album của ngày:
// const musicDay = document.getElementById("musicDay")
const albumMusic = document.getElementById("albumMusic")
let arrRan = new Array()
async function musicOfDay() {
    var pickRanArr = new Array()
    for (var i = 0; i < 5; i++) {
        var infoMusicOfDay = document.createElement('div')
        infoMusicOfDay.style.display = 'flex'
        infoMusicOfDay.style.marginBottom = "2%"

        var ran = Math.floor(Math.random() * musicList.length)
        while (arrRan.includes(ran)) {
            ran = Math.floor(Math.random() * musicList.length)
        }
        arrRan.push(ran)
        pickRanArr[i] = musicList[arrRan[i]]
        var musicDayDiv = document.createElement('div')
        musicDayDiv.className = "musicOfTheDay"
        musicDayDiv.textContent = `${i+1}. ${nameAlbum[arrRan[i]].substring(0, nameAlbum[arrRan[i]].indexOf(" - "))}`

        var pictureDayImg = document.createElement('img')
        pictureDayImg.style.height = "3rem"
        pictureDayImg.style.width = "3rem"
        pictureDayImg.style.marginRight = '3%'
        pictureDayImg.src = imgAlbum[arrRan[i]]
        pictureDayImg.style.border = "solid"
        pictureDayImg.style.borderWidth = " 2px 2px 2px 0"
        pictureDayImg.style.userSelect = "none"

        infoMusicOfDay.appendChild(pictureDayImg)
        infoMusicOfDay.appendChild(musicDayDiv)

        albumMusic.appendChild(infoMusicOfDay)
        addClickMusicAlbum(i)
    }
}
function addClickMusicAlbum(i) {
    var musicOfTheDay = document.getElementsByClassName("musicOfTheDay")
    musicOfTheDay[i].addEventListener('click', () => {
        openMusicPopup()
        ranIndex = arrRan[i]
        ranMusic = musicList[ranIndex]
        document.getElementById("musicPlay").src = ranMusic
        document.getElementById("nameMusic").innerHTML = `Đang phát <b>${nameAlbum[ranIndex]}</b>`

        musicPlay.play()
        pauseMusic.className = "fa-solid fa-pause"
        document.getElementById("nameMusic").innerHTML = `Đang phát: <b>${nameAlbum[ranIndex]}</b>`
        thumbMusic.style.animation = "rorateDisk 5s linear infinite"
        thumbPopup.style.animation = "rorateDisk 5s linear infinite"

        thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
        popupMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
        thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    })
}

//Danh sách album
const listMusicName = document.getElementById("listMusicFrame")

async function showFullListAlbum() {
    for (let i = 0; i < musicList.length; i++) {
        var itemSong = document.createElement('div')
        itemSong.className = "itemSong"
        listMusicName.appendChild(itemSong)

        var subIMG = document.createElement('div')
        subIMG.className = "subIMG"
        var imgSub = document.createElement('img')
        subIMG.appendChild(imgSub)
        imgSub.src = imgAlbum[i]
        imgSub.style.width = "100%"

        var infoSong = document.createElement('div')
        infoSong.className = "info--song"

        var nameSong = document.createElement('div')
        nameSong.className = 'nameSong'
        nameSong.textContent =  nameAlbum[i].substring(0, nameAlbum[i].indexOf(" - "))
        var singer = document.createElement('div')
        singer.className = 'singer'
        singer.textContent = nameAlbum[i].substring(nameAlbum[i].indexOf(" - "), nameAlbum[i].length)
        infoSong.appendChild(nameSong)
        infoSong.appendChild(singer)

        itemSong.appendChild(subIMG)
        itemSong.appendChild(infoSong)
        addFullClickMusicAlbum(i)
    }
}

function addFullClickMusicAlbum(i) {
    var itemSong = document.getElementsByClassName("itemSong")
    itemSong[i].addEventListener('click', () => {
        openMusicPopup()
        ranIndex = i
        ranMusic = musicList[ranIndex]
        document.getElementById("musicPlay").src = ranMusic
        document.getElementById("nameMusic").innerHTML = `Đang phát <b>${nameAlbum[ranIndex]}</b>`

        musicPlay.play()
        pauseMusic.className = "fa-solid fa-pause"
        document.getElementById("nameMusic").innerHTML = `Đang phát: <b>${nameAlbum[ranIndex]}</b>`
        thumbMusic.style.animation = "rorateDisk 5s linear infinite"
        thumbPopup.style.animation = "rorateDisk 5s linear infinite"

        thumbMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
        popupMusic.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
        thumbPopup.style.backgroundImage = `url(${imgAlbum[ranIndex]})`
    })
}

showFullListAlbum()
musicOfDay()
thumbnailMusic()
randomMusic()
checkPlayedMusic()