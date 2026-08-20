alert("olá mundo!")

var nasc = 2010;          
let nome = "Lara";    
const viva = true;        
let altura = 1.61;        

if (viva) {
    let saudacao = "Olá, " + nome + "!";

    let mensagem = `Altura: ${altura}m | Idade: ${2025-nasc}`;
    alert(saudacao+'\n'+mensagem);
} else {

    alert("Você não está viva!");
}
