const title = document.getElementById("ListDictionary_Title--Pokemon")
const listpkm = document.getElementById("ListDictionary_List--Pokemon")
const pokedex = document.getElementById("pokedex")
const move = document.getElementById("move")
const ability = document.getElementById("ability")

click = false
title.addEventListener('click', () => {
    if (click == false) {
        listpkm.style.display = ""
        click = true
    }
    else {
        listpkm.style.display = "none"
        click = false
    }
})

pokedex.addEventListener('click', () => {
    let url = `https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json`
    let respone = fetch(url)
    // let json = JSON.stringify(respone)
    console.log(respone)
})