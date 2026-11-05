import { grupos } from "./carros.js";

const cardsGrupo = document.querySelectorAll(".card-destaque");

cardsGrupo.forEach(card => {

    const nomeGrupo = card.dataset.grupo;

    // Procura o grupo correspondente
    const grupoEscolhido = grupos.find(
        grupo => grupo.nome === nomeGrupo
    );

    // Verifica se encontrou o grupo
    if (!grupoEscolhido) {
        console.error(`Grupo ${nomeGrupo} não encontrado`);
        return;
    }

    const imagemCarro = card.querySelector(".imagemCarro");
    const btnProximo = card.querySelector(".btn-proximo");
    const btnAnterior = card.querySelector(".btn-anterior");

    if (!imagemCarro || !btnProximo || !btnAnterior) {
        console.error(`Elementos não encontrados no ${nomeGrupo}`);
        return;
    }

    // Monta os caminhos das imagens
    const imagens = grupoEscolhido.imagens.map(imagem =>
        `./assets/images/categorias/${imagem}`
    );

    let contador = 0;

    imagemCarro.src = imagens[contador];

    // Próxima imagem
    btnProximo.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        contador = (contador + 1) % imagens.length;

        imagemCarro.src = imagens[contador];

    });

    // Imagem anterior
    btnAnterior.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        contador = (contador - 1 + imagens.length) % imagens.length;

        imagemCarro.src = imagens[contador];

    });

});

