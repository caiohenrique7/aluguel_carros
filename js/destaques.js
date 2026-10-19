import { carros } from "./carros.js";

// Elementos da página
const destaques = document.querySelectorAll(".card-destaque");
const template = document.querySelector("#template-anuncio");
const mostrar = document.querySelector(".mostrar");

// Clique nos cards da página inicial
destaques.forEach(destaque => {
    destaque.addEventListener("click", () => {
        const nomeCarro = destaque.dataset.carro;

        window.location.href =
            `./pages/carro.html?carro=${encodeURIComponent(nomeCarro)}`;
    });
});

// Preencher os detalhes do carro selecionado
document.addEventListener("DOMContentLoaded", () => {

    // Verifica se os elementos existem nesta página
    if (!mostrar || !template) {
        return;
    }

    const parametros = new URLSearchParams(window.location.search);
    const nomeCarro = parametros.get("carro");

    // Encontra um único carro pelo nome
    const carroEscolhido = carros.find(
        carro => carro.nome === nomeCarro
    );

    // Caso o carro não exista no array
    if (!carroEscolhido) {
        mostrar.textContent = "Veículo não encontrado.";
        return;
    }

    // Cria uma cópia do template
    const copia = template.content.cloneNode(true);

    // Preenche os dados
    copia.querySelector(".imagens-carro img").src = carroEscolhido.imagem;
    copia.querySelector(".imagens-carro img").alt = carroEscolhido.nome;

    copia.querySelector(".nome-carro-dest").textContent =
        carroEscolhido.nome;

    // Atualiza somente o valor, preservando o /dia
    const preco = copia.querySelector(".titulo-price");
    const precoPorDia = preco.querySelector(".valor-diaria");

    if (precoPorDia) {
        precoPorDia.textContent = `R$ ${carroEscolhido.precoDiaria}`;
    }

    // Insere o anúncio na página
    mostrar.appendChild(copia);
});