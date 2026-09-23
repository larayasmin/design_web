const amigos = []
const cadastro = document.getElementById("Cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista")

cadastro.addEventListener("submit", function(l){
    l.preventDefault()
    let item = [nome.value, nasc.value, whatsapp.value];
    amigos.unshift(item);

    cadastro.reset(); //LIMPA O FORMULARIO
    exibirLista(); //ATUALIZA A LISTA
});

function exibirLista(){
    let itens = "";
    for (let i = 0; i < amigos.length; i ++){
        let item = amigos[i] //Item = [Nome, Nasc, Whatsapp]
        
        let remover = `<button onclick = remover (${i})> Remover</button>`

        //CRIA UMA TAG LI
        let li = `<li> ${item[0]} | ${item[1]} | ${item[2]}  ${remover} </li>`;
        //JUNTA O LI NOS ITENS
        itens = itens + li;
    }
    //ALTERAR O HTML DA LISTA PARA SER IGUAL AOS ITENS
    lista.innerHTML = itens;
}

function remover(i){
    let item = amigos[i]; //[Nome, Nasc, Whatapp]]
    let chekc = confirm(`Deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice{i,1}; //splice(posicao inicial, qtd itens a remover)
    }
    exibirLista();
}