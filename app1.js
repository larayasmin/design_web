let i = 1;

const imagem = document.getElementById("foto");

function proximo(y) {

    y.preventDefault();

    if (i < 6) {
        i = i + 1;
    }

    imagem.setAttribute("src", `./img/foto${i}.jpg`);
}

const prox = document.getElementById("prox");

prox.addEventListener("click", proximo);


function anterior(y) {

    y.preventDefault();

    if (i > 1) {
        i = i - 1;
    }

    imagem.setAttribute("src", `./img/foto${i}.jpg`);
}

const ant = document.getElementById("ant");

ant.addEventListener("click", anterior);
