
const input = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
    const texto = input.value.trim();
    if (texto === "") return;

    // 1. Criar um novo elemento (createElement)
    const item = document.createElement("li");
    item.textContent = texto;

    // 2. Criar botão de remover (createElement)
    const remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.addEventListener("click", function () {
        // 6. Remover o próprio elemento (remove)
        item.remove();
    });

    // 3. Adicionar o botão ao item (append)
    item.append(" ", remover);

    // 4. Adicionar o item à lista (appendChild)
    lista.appendChild(item);

    // 5. Alternativa: adicionar no início (prepend)
    // lista.prepend(item);

    input.value = "";
});