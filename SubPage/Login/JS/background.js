const bgLogin = document.getElementById("bg-login").getElementsByTagName("img")
//Tạo mảng chứa hình
let bgarr = new Array()

for (let i = 0; i < 10; i++) {
    bgarr.push(`IMG/bg${i+1}.jpg`)
}
//Setup vị trí ban đầu
let posOri = Math.floor(Math.random()*bgarr.length)
let pic2 = true
let secondTime = 0

//Nạp src vào 2 img
bgLogin[0].src = bgarr[posOri]
posOri++
if (posOri >= bgarr.length) {
    posOri = 0
}
bgLogin[1].src = bgarr[posOri]

//Sau một thời gian sẽ chuyển từ bg1 sang bg2
var second = setInterval(() => {
    secondTime++
    if (secondTime >= 6) {
        secondTime = 0
        if (pic2 == true) {
            bgLogin[1].style.opacity = 0
            setTimeout(() => {
                posOri++
                if (posOri >= bgarr.length) posOri = 0
                bgLogin[1].src = bgarr[posOri]
                pic2 = false
            }, 600)
        }
        else {
            bgLogin[1].style.opacity = 1
            setTimeout(() => {
                posOri++
                if (posOri + 1 >= bgarr.length) posOri = 0
                bgLogin[0].src = bgarr[posOri]
                pic2 = true
            }, 600)
        }
    }
}, 1000)