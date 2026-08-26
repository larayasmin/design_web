var nasc = 2010;
let nome =  "Lara Yasmin";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert('Fora da fução : Idade ${idade}');
Erro pois a variavel let não existe fora do escopo dela
*/
alert(`Fora da fução : chamando calcIdade ${calcIdade(2027)}`);
