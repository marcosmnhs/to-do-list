const form = document.getElementById("formTarefa");
const inputTarefa = document.getElementById("inputTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede reload
    adicionarTarefa();
});

function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();

    if (!tarefa) {
        mensagem.textContent = "Insira alguma tarefa.";
        return;
    }

    const li = document.createElement("li");
    li.classList.add("tarefa");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.hidden = true;

    const span = document.createElement("span");
    span.textContent = tarefa;

    const button = document.createElement("button");
    button.textContent = "🗑️";

    // clicar no li marca/desmarca checkbox
    li.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
    });

    // botão remove a tarefa
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // impede clique no li
        if (confirm("Deseja realmente excluir esta tarefa?")) {
            li.remove();
            document.getElementById("mensagem").textContent = "Tarefa '" + span.textContent + "' removida com sucesso.";
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    listaTarefas.appendChild(li);

    mensagem.textContent = `Tarefa "${tarefa}" adicionada com sucesso!`;
    inputTarefa.value = "";
}
