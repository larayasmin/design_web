var nasc = 2010;
let nome =  "Lara Yasmin";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false
    }else{
        menor = false;
        var podebeber = true;
    }
        alert(`${nome} é menor de idade ${menor}/nIdade: ${idade}/nPode beber: ${podebeber}`)
}

calcIdade();
/*
var vaza a variavel dentro do escopo da mesma funcao
alert(`Pode beber: ${podebeber}`)
/*
alert('Fora da fução : Idade ${idade}');
Erro pois a variavel let não existe fora do escopo dela
*/
alert(`Fora da fução : chamando calcIdade ${calcIdade(2027)}`);
