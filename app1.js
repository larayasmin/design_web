let i = 1;

const imagem = document.getElementById("foto")

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

function selecionar(y){
    y.preventDefault();
    i = Number(cbbox.value);
    imagem.setAttribute("src", `./img/foto${i}.jpg`)
}
const cbbox = document.getElementById("combobox");
cbbox.addEventListener("change", selecionar);

const opacidade = document.getElementById("combobox");
opacidade.addEventListener("input", function(y){
    y.preventDefault();
    let valor = opacidade.value;
    foto.setAttribute("style", `opacidade:${valor}`);
});

const li1 = document.getElementById("li1");
li1.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 1;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li2 = document.getElementById("li2");
li2.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 2;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li3 = document.getElementById("li3");
li3.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 3;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li4 = document.getElementById("li4");
li4.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 4;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li5 = document.getElementById("li5");
li5.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 5;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});

const li6 = document.getElementById("li6");
li6.addEventListener("mouseover", function(y){
    y.preventDefault();
    i = 6;
    imagem.setAttribute("src", `./img/foto${i}.jpg`);
});