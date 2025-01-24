var listName = [];
let resultado = [];

function adicionarAmigo() {
    saveNameInListName();
    viewListName();
}

function viewListName() {
    let listNameHtml = document.querySelector('#listaAmigos');
    listNameHtml.innerHTML = '';
    for (let i = 0; i < listName.length; i++) {
        let li = document.createElement('li');
        li.textContent = listName[i];
        listNameHtml.appendChild(li);
    }
}


function saveNameInListName() {
    var inputNome = document.querySelector('#amigo');

    if (inputNome.value === '' || /[0-9]/.test(inputNome.value)) {
        alert('Por favor, digite um nome válido. Não use números ou caracteres especiais.');
        return;
    }

   if (listName.includes(inputNome.value)) {
        alert('Nome já está cadastrado na lista');
    } else {
        listName.push(inputNome.value);
        inputNome.value = '';
    }
}

function sortearAmigo() {
    if (listName.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    if (listName.length < 2) {
        alert("A lista precisa de pelo menos 2 nomes para o sorteio.");
        return;
    }

    let pessoaSorteador = [...listName];
    let pessoaSorteada = [...listName];
    const resultado = [];

    for (let i = 0; i < pessoaSorteador.length; i++) {

        const sorteador = pessoaSorteador[i];

        const nomesDisponiveis = pessoaSorteada.filter(nome => nome !== sorteador);

        const indice = Math.floor(Math.random() * nomesDisponiveis.length);
        const sorteado = nomesDisponiveis[indice];

        resultado.push(`${sorteador} sorteou ${sorteado}`);

        const indexToRemove = pessoaSorteada.indexOf(sorteado);
        pessoaSorteada.splice(indexToRemove, 1);
    }

    exibirResultadoSorteio(resultado);
}

function exibirResultadoSorteio(resultado) {
    const resultadoHtml = document.querySelector('#resultado');
    resultadoHtml.innerHTML = '';

    resultado.forEach((linha) => {
        const li = document.createElement('li');
        li.textContent = linha;
        resultadoHtml.appendChild(li);
    });
}


