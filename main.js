let contador = 0;
let input = document.getElementById("tarefa");
let btnAdd = document.getElementById("botao");
let main = document.getElementById("areaLista");

function addTarefa() {
  let valorInput = input.value;
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
            </i> Excluir</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");
  }
}