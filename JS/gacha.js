let wp3 = [
    "[3★]Tóm Tắt Ma Pháp",
    "[3★]Tín Sứ",
    "[3★]Tiểu Thuyết Dị Giới",
    "[3★]Thương Bạch Anh",
    "[3★]Thuẫn Kích",
    "[3★]Thần Kiếm Lê Minh",
    "[3★]Quả Cầu Ngọc",
    "[3★]Nỏ Kéo",
    "[3★]Ngọc Sinh Đôi",
    "[3★]Lời Thề Xạ Thủ Thần",
    "[3★]Lãnh Nhẫn",
    "[3★]Kiếm Thiết Ảnh",
    "[3★]Kiếm Sắt Đen",
    "[3★]Kiếm Phi Thiên",
    "[3★]Kiếm Lữ Hành",
    "[3★]Kiếm Huyết Rồng",
    "[3★]Kiếm Bạch Thiết",
    "[3★]Hắc Anh Thương",
    "[3★]Gậy Thu Phục",
    "[3★]Đao Săn Cá",
    "[3★]Đại Kiếm Phi Thiên",
    "[3★]Cung Phản Khúc",
    "[3★]Cung Lông Vịt",
    "[3★]Cung Lông Vịt"
]
let wp4 = [
    "[4★]Akoumaru",
    "[4★]Ánh Trăng Mouun",
    "[4★]Ánh Trăng Xiphos",
    "[4★]Bài Ca Hoa Gió",
    "[4★]Cận Vệ Nhà Vua",
    "[4★]Chiêu Tâm",
    "[4★]Chương Nhạc Lang Thang",
    "[4★]Cung Hắc Nham",
    "[4★]Cung Rỉ Sét",
    "[4★]Cung Tây Phong",
    "[4★]Cung Tế Lễ",
    "[4★]Cung Trừ Ma",
    "[4★]Đại Kiếm Tây Phong",
    "[4★]Đại Kiếm Tế Lễ",
    "[4★]Đại Kiếm Tông Thất",
    "[4★]Điệu Van Ban Đêm",
    "[4★]Hắc Nham Phỉ Ngọc",
    "[4★]Hắc Nham Trảm Đao",
    "[4★]Hắc Nham Trường Kiếm",
    "[4★]Kagotsurube Isshin",
    "[4★]Kẻ Săn Mồi",
    "[4★]Kiếm Chuông",
    "[4★]Kiếm Giáng Lâm",
    "[4★]Kiếm Gỗ",
    "[4★]Kiếm Sáo",
    "[4★]Kiếm Tế Lễ",
    "[4★]Mảnh Chương Tế Lễ",
    "[4★]Mật Pháp Tông Thất",
    "[4★]Mũi Nhọn Của Gió",
    "[4★]Quả Mọng",
    "[4★]Quán Nguyệt Thương",
    "[4★]Răng Nanh Rỉ Sét",
    "[4★]Rượu Và Thơ Nơi Hẻm Tối",
    "[4★]Sao Đêm Rong Ruổi",
    "[4★]Sắc Nước Makhaira",
    "[4★]Sông Cạn",
    "[4★]Tai Ương Của Rồng",
    "[4★]Tây Phong Kiếm",
    "[4★]Tây Phong Mật Điển",
    "[4★]Thiên Nham Cổ Kiếm",
    "[4★]Thợ Săn Hẻm Tối",
    "[4★]Thương Hắc Nham",
    "[4★]Thương Săn Tông Thất",
    "[4★]Thương Tây Phong",
    "[4★]Thương Thiên Nham",
    "[4★]Tia Sáng Nơi Hẻm Tối",
    "[4★]Tiếng Hét Của Rồng",
    "[4★]Toukabou Shigure",
    "[4★]Trường Cung Tông Thất",
    "[4★]Trường Kiếm Tông Thất",
    "[4★]Tuyệt Huyền",
    "[4★]Vũ Tài",
    "[4★]Vua Biển Hàng Hiệu",
    "[4★]Vương Khí Rừng Sâu"
]
let wp5 = [
    "[5★]Bàn Nham Kết Lục",
    "[5★]Cánh Thiên Không",
    "[5★]Con Đường Thợ Săn",
    "[5★]Cung Amos",
    "[5★]Điển Tích Tây Phong",
    "[5★]Đường Cùng Của Sói",
    "[5★]Phong Ưng Kiếm",
    "[5★]Quyển Thiên Không",
    "[5★]Thiên Không Kiếm",
    "[5★]Thiên Không Kiêu Ngạo",
    "[5★]Xương Sống Thiên Không"
]
let ch4 = [
    "[4★]Candace",
    "[4★]Collei",
    "[4★]Fazuran",
    "[4★]Gorou",
    "[4★]Kuki Shinobu",
    "[4★]Layla",
    "[4★]Shikanoin Heizou",
    "[4★]Thoma",
    "[4★]Yun Jin",
    "[4★]Ningguang",
    "[4★]Noelle",
    "[4★]Chongyun",
    "[4★]Diona",
    "[4★]Kaeya",
    "[4★]Rosaria",
    "[4★]Amber",
    "[4★]Bennett",
    "[4★]Xiangling",
    "[4★]Xinyan",
    "[4★]Yanfei",
    "[4★]Barbara",
    "[4★]Xingqiu",
    "[4★]Beidou",
    "[4★]Fischl",
    "[4★]Kujou Sara",
    "[4★]Lisa",
    "[4★]Razor",
    "[4★]Sayu",
    "[4★]Sucrose"
]
let pullgacha = ["[5★]Keqing", "[5★]Jean", "[5★]Qiqi", "[5★]Diluc", "[5★]Mona", "[5★]Tignari", "[5★]Dehya"]


function gacha() {
    document.getElementById("gacharesult").innerHTML = ""
    //Tạo 1 mảng để sắp xếp độ hiếm
    let sort = new Array()
    //Tạo 1 mảng để set Color
    let colorArr = new Array()
    let protectRate = Math.floor(Math.random() * 99)
    //Luôn được ít nhất 1 4* hay 5*
    var result = new Array()
    if (protectRate < 97) {
        let star4 = Math.round(Math.random())
        if (star4 == 1) {
            let slot1 = ch4[Math.round(Math.random() * 28)]
            result.push(slot1)
            sort.push(4)
            colorArr.push("rgb(212, 0, 212)")
        }
        else {
            let slot1 = wp4[Math.round(Math.random() * 53)]
            result.push(slot1)
            sort.push(4)
            colorArr.push("rgb(212, 0, 212)")
        }
    }
    else {
        let rate = Math.round(Math.random() * 2)
        if (rate == 0) {
            let slot1 = wp5[Math.round(Math.random() * 10)]
            result.push(slot1)
            sort.push(5)
            colorArr.push("rgb(204, 173, 0)")
        }
        else {
            let slot1 = pullgacha[Math.round(Math.random() * 6)]
            result.push(slot1)
            sort.push(5)
            colorArr.push("rgb(204, 173, 0)")
        }
    }

    //Gacha các lượt còn lại
    for (let i = 1; i < 10; i++) {
        let rategacha = Math.floor(Math.random() * 10000)
        if (rategacha < 4715 || rategacha > 5285) {
            let res = wp3[Math.round(Math.random() * 23)]
            result.push(res)
            sort.push(3)
            colorArr.push("rgb(0, 55, 255)")
        }
        else if (rategacha < 5005) {
            let res = wp4[Math.round(Math.random() * 53)]
            result.push(res)
            sort.push(4)
            colorArr.push("rgb(212, 0, 212)")

        }
        else if (rategacha < 5225) {
            let res = ch4[Math.round(Math.random() * 28)]
            result.push(res)
            sort.push(4)
            colorArr.push("rgb(212, 0, 212)")

        }
        else if (rategacha < 5265) {
            let res = wp5[Math.round(Math.random() * 10)]
            result.push(res)
            sort.push(5)
            colorArr.push("rgb(204, 173, 0)")
        }
        else {
            let res = pullgacha[Math.round(Math.random() * 6)]
            result.push(res)
            sort.push(5)
            colorArr.push("rgb(204, 173, 0)")
        }
    }

    //Sắp xếp kết quả
    for (var i = 0; i < sort.length - 1; i++) {
        for (var n = 0; n < sort.length - 1 - i; n++) {
            if (sort[n] < sort[n + 1]) {
                x = sort[n]
                y = result[n]
                z = colorArr[n]

                sort[n] = sort[n + 1]
                result[n] = result[n + 1]
                colorArr[n] = colorArr[n + 1]

                sort[n + 1] = x
                result[n + 1] = y
                colorArr[n + 1] = z
            }
        }
    }

    const gacharesult = document.getElementById("gacharesult")
    const gachabtn = document.getElementById("gachabutton")
    if (sort[0] == 4) {
        gacharesult.style.backgroundImage = `url("https://media.tenor.com/8OqlJIRATS0AAAAd/wishing-genshin.gif")`
        // gacharesult.style.width = "50vi"
        gacharesult.style.height = "18.5vi"
        gacharesult.style.borderRadius = "0 0 10px 10px"
        gacharesult.style.backgroundRepeat = "no-repeat"
        gachabtn.style.pointerEvents = "none"
    }
    else {
        gacharesult.style.backgroundImage = `url("hhttps://media.tenor.com/Nc7Fgo43GLwAAAAd/genshin-gold-genshin-wish.gif")`
        // gacharesult.style.width = "50vi"
        gacharesult.style.height = "18.5vi"
        gacharesult.style.borderRadius = "0 0 10px 10px"
        gacharesult.style.backgroundRepeat = "no-repeat"
        gachabtn.style.pointerEvents = "none"
    }




    setTimeout(() => {
        for (let i = 0; i < sort.length; i++) {
            gacharesult.style.backgroundImage = ""
            const resultDiv = document.createElement('div')
            resultDiv.innerHTML = result[i] + "</br>"
            resultDiv.style.color = colorArr[i]
            gacharesult.appendChild(resultDiv)
            gacharesult.style.height = ""
        }
        gachabtn.style.pointerEvents = "auto"
    }, 6000)


}
