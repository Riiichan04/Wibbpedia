//Add List Tên Nhạc ở WebCon
//Add List Tên Nhạc 
function addJPName() {
    var jpName = document.getElementById("JPMusic")
    for (var i = 0; i < musicList.length; i++) {
        var btnName = document.createElement("p")
        btnName.id = `JPName`
        btnName.innerHTML = `${i+1}. ${nameAlbum[i]}`
        jpName.appendChild(btnName)
    }
}

addJPName()