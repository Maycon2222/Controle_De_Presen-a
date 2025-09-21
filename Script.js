// Seleciona os elementos com base nos IDs
const inputNome = document.getElementById("nomeAluno");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaAlunos = document.getElementById("listaAlunos");

// Adiciona evento de clique ao botão
btnAdicionar.addEventListener("click", () => {
  const nome = inputNome.value.trim();
  if (nome === "") {
    alert("Por favor, digite um nome antes de adicionar.");
    return;
  }

  // faz a verificação se o nome já existe na lista (ignorando maiúsculas/minúsculas)
  const nomesExistentes = Array.from(
    listaAlunos.getElementsByTagName("li")
  ).map((li) => li.textContent.toLowerCase());
  if (nomesExistentes.includes(nome.toLowerCase())) {
    alert("Esse aluno já foi adicionado!");
    inputNome.value = "";
    inputNome.focus();
    return;
  }
  // Adiciona o nome a lista
  const li = document.createElement("li");
  li.textContent = nome;
  listaAlunos.appendChild(li);

  inputNome.value = "";
  inputNome.focus();
});
