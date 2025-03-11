let kyp = document.querySelector("#txttime")
let title = document.getElementById("titulo")
let data = new Date()
let hora = data.getHours()



function altera(valor,imagem) {

    let alterna = document.body.style.backgroundColor = valor
    let alteraimg = document.getElementById("imagin")
    alteraimg.src = imagem
    return alterna
}

kyp?.addEventListener("keyup", () => {
    let valorInput = kyp.value.toLowerCase();
    switch(valorInput) {

        case "noite":
            altera("rgb(12, 12, 12);","./img/noite.png")
            title.innerHTML = "Modo Barra De Texto"
        break

        case "tarde":
            altera("rgb(233, 131, 58)","./img/tarde.jpg")
            title.innerHTML = "Modo Barra De Texto"
        break

        case "dia":
            altera("rgb(253, 251, 105)","./img/dia.jpg")
            title.innerHTML = "Modo Barra De Texto"
            break
        default: 
            atualizar();
        break
        
    }
})

atualizar()
function atualizar() {

    if (hora >= 18 || hora <= 4) {
        altera("black", "./img/noite.png");
        title.innerHTML = `Boa Noite! atualmente é ${hora}h`
    } else if (hora >= 12) {
        altera("rgb(233, 131, 58)", "./img/tarde.jpeg");
        title.innerHTML = `Boa Tarde! atualmente é ${hora}h`
    } else if (hora >= 5) {
        altera("rgb(253, 251, 105)", "./img/dia.jpg");
        title.innerHTML = `Bom Dia! atualmente é ${hora}h`
    } 
}

