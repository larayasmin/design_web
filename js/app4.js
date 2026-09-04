let vezes = Number(prompt("Digite o número de vezes: "));
for (let i = 0; i <= vezes; i++){
    if (vezes > 100){
        alert("Valor inválido, digite um valor de 0 a 100: ");
        break
    }
    alert(`Contei ${i} vezes.`)
    if (i % 2 != 0){ //é impar?
        continue; //se impar, continua = voltar para o início.
    }
    alert(`${i} é par.`);
}