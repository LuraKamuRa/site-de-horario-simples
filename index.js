let kyp = document.querySelector("#txttime");
let title = document.getElementById("titulo");
let data = new Date();
let hora = data.getHours();

function altera(valor, imagem) {
    document.body.style.backgroundColor = valor;
    let alteraimg = document.getElementById("imagin");
    if (alteraimg) {
        alteraimg.src = imagem;
    }
}

if (kyp) {
    kyp.addEventListener("keyup", () => {
        let valorInput = kyp.value.toLowerCase();
        switch (valorInput) {
            case "noite":
                altera("rgb(12, 12, 12)", "./img/noite.png");
                title.innerHTML = "Modo Barra De Texto";
                break;

            case "tarde":
                altera("rgb(233, 131, 58)", "./img/tarde.jpg");
                title.innerHTML = "Modo Barra De Texto";
                break;

            case "dia":
                altera("rgb(253, 251, 105)", "./img/dia.jpg");
                title.innerHTML = "Modo Barra De Texto";
                break;

            default:
                atualizar();
                break;
        }
    });
}

function atualizar() {
    if (hora >= 18 || hora < 5) {
        altera("black", "./img/noite.png");
        title.innerHTML = `Boa Noite! Atualmente são ${hora}h`;
    } else if (hora >= 12) {
        altera("rgb(233, 131, 58)", "./img/tarde.jpg");
        title.innerHTML = `Boa Tarde! Atualmente são ${hora}h`;
    } else {
        altera("rgb(253, 251, 105)", "./img/dia.jpg");
        title.innerHTML = `Bom Dia! Atualmente são ${hora}h`;
    }
}

atualizar();
