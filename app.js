var nasc = 2010;
let nome = "Lara";
const viva = true;

function calcIdade(ano=2026){    //Function é igual o def
    let idade = ano -  nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora da funcao : Idade ${idade}`);
Erro pois a variavel leyt nao existe fora do escopo dela
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
 