let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "))
let op;

do{
    let mensg = "Escolha uma opção:\n";
    mensg = mensg + "1: Somar\n";
    mensg = mensg + "2: Subtrair\n";
    mensg = mensg + "3: Multiplicar\n";
    mensg = mensg + "4: Dividir\n";
    mensg = mensg + "5: Sair\n";
    op = prompt(mensg);
    switch(op){
        case "1": alert(`${n1} + ${n2} = ${n1 + n2}`); break;
        case "2": alert(`${n1} - ${n2} = ${n1 - n2}`); break;
        case "3": alert(`${n1} * ${n2} = ${n1 * n2}`); break;
        case "4": alert(`${n1} / ${n2} = ${n1 / n2}`); break;
        case "5": alert("Até logo!"); break;

        default: alert("Opção inválida!"); break;
    }
}while(op != "5")

