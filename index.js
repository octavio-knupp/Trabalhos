
function GerarParagrafos() {
    const container = document.querySelector("#paragrafos");
    container.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const p = document.createElement("p");
        p.textContent = `Parágrafo ${i}: Nícolas, Octavio e Carlos conseguiram!`;

        if (i % 3 === 0) {
            p.style.backgroundColor = "#286d";
            p.classList.add("bold");
        }

        container.appendChild(p);
    }
}

function GerarTabuada() {
    const valor = Number(document.querySelector('#numero').value);
    const tabuadaDiv = document.querySelector('#tabuada');
    tabuadaDiv.innerHTML = '';

    if (isNaN(valor) || valor < 1 || valor > 10) {
        tabuadaDiv.textContent = 'Valor inválido, informe valor entre 1-10';
        tabuadaDiv.style.color = '#800000';
        return;
    }

    tabuadaDiv.style.color = 'black'; // resetar cor
    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('p');
        linha.textContent = `${valor} x ${i} = ${valor * i}`;
        tabuadaDiv.appendChild(linha);
    }
}

function calcularMedia() {
    const nota1 = Number(document.querySelector('#nota1').value);
    const nota2 = Number(document.querySelector('#nota2').value);
    const faltas = Number(document.querySelector('#faltas').value);
    const resultadoDiv = document.querySelector('#resultadoMedia');

    if (isNaN(nota1) || nota1 < 0 || nota1 > 10 ||
        isNaN(nota2) || nota2 < 0 || nota2 > 10 ||
        isNaN(faltas) || faltas < 0 || faltas > totalAulas) {
        resultadoDiv.textContent = 'Preencha os campos corretamente.';
        resultadoDiv.style.color = 'red';
        return;
    }
    const somarNotas = (nota1 + nota2);
    const media = (somarNotas / 2);
    const percentualPresenca = (porcentagem / 100) * totalAulas;
    let mensagem = document.getElementById('resultadoMedia');
    let cor = '';
    const totalAulas = 80;

    if (media >= 7.0 && percentualPresenca <= 60) {
        mensagem = `Aprovado`;
        cor = '#286d';
    } else if (percentualPresenca > 20) {
        mensagem = `Reprovado por falta:`;
        cor = '#800000';
    } else {(media <= 6.9)
        mensagem = `Reprovado por nota`;
        cor = '#800000';
    }


    resultadoDiv.textContent = mensagem;
    resultadoDiv.style.color = cor;
}

  let total = 0;

        function adicionarItem() {
            const produtoInput = document.querySelector('#produto');
            const valorInput = document.querySelector('#valor');
            const lista = document.querySelector('#lista');
            const totalSpan = document.querySelector('#total');

            const produto = produtoInput.value.trim();
            const valor = parseFloat(valorInput.value);

            // Validação
            if (produto === '') {
                alert('O nome do produto não pode estar vazio.');
                return;
            }
            if (isNaN(valor) || valor <= 0) {
                alert('Informe um valor válido (maior que zero).');
                return;
            }

            // Cria uma nova linha na tabela
            const linha = document.createElement('tr');

            const colunaProduto = document.createElement('td');
            colunaProduto.textContent = produto;

            const colunaValor = document.createElement('td');
            colunaValor.textContent = valor.toFixed(2).replace('.', ',');

            linha.appendChild(colunaProduto);
            linha.appendChild(colunaValor);

            lista.appendChild(linha);

            // Atualiza o total
            total += valor;
            totalSpan.textContent = total.toFixed(2).replace('.', ',');

            // Limpa os campos
            produtoInput.value = '';
            valorInput.value = '';
            produtoInput.focus();
        }

        function limparLista() {
            const lista = document.querySelector('#lista');
            const totalSpan = document.querySelector('#total');

            lista.innerHTML = '';
            total = 0;
            totalSpan.textContent = '0,00';
        }
