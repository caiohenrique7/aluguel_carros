import { carros } from "./carros.js";
const mostrar = document.querySelector(".categoriasMostrar");
const template = document.querySelector("#template-carro");
const buscar = document.querySelector("#buscarCarros");
buscar.addEventListener("click", pesquisarCarros);
const catBotoes = document.querySelectorAll("#catBotoes");

document.addEventListener("DOMContentLoaded", () => {

    carros.forEach(carro => {

        const copia = template.content.cloneNode(true);

        copia.querySelector(".imagem-carro").src = carro.imagem;
        copia.querySelector(".imagem-carro").alt = carro.nome;

        copia.querySelector(".nome-carro-cat").textContent = carro.nome;

        copia.querySelector(".basic-info-car").textContent =
            `${carro.categoria} • ${carro.cambio} • ${carro.combustivel}`;

        copia.querySelector(".lugares-carro").textContent = carro.lugares;

        copia.querySelector(".valor-carro").textContent =
            `R$ ${carro.precoDiaria}`;

        mostrar.appendChild(copia);
    });

});

function pesquisarCarros() {
    const pesquisa = document.querySelector("#pesquisaCarros");


    const texto = pesquisa.value.toLowerCase().trim();

    const resultados = carros.filter(carro =>
        carro.nome.toLowerCase().includes(texto)
    );

    mostrar.innerHTML = ""
    resultados.forEach(carro => {

        const copia = template.content.cloneNode(true);

        copia.querySelector(".imagem-carro").src = carro.imagem;
        copia.querySelector(".imagem-carro").alt = carro.nome;

        copia.querySelector(".nome-carro-cat").textContent = carro.nome;

        copia.querySelector(".basic-info-car").textContent =
            `${carro.categoria} • ${carro.cambio} • ${carro.combustivel}`;

        copia.querySelector(".lugares-carro").textContent = carro.lugares;

        copia.querySelector(".valor-carro").textContent =
            `R$ ${carro.precoDiaria}`;

        mostrar.appendChild(copia);
    });


}

catBotoes.forEach(categoria => {
    categoria.addEventListener("click", () => {
        let cat = categoria.dataset.categoria;

        let resultados;

        if (cat === "todos") {
            resultados = carros;
        } else {
            resultados = carros.filter(carro => carro.categoria === cat);
        }


        mostrar.innerHTML = ""
        resultados.forEach(carro => {

            const copia = template.content.cloneNode(true);

            copia.querySelector(".imagem-carro").src = carro.imagem;
            copia.querySelector(".imagem-carro").alt = carro.nome;

            copia.querySelector(".nome-carro-cat").textContent = carro.nome;

            copia.querySelector(".basic-info-car").textContent =
                `${carro.categoria} • ${carro.cambio} • ${carro.combustivel}`;

            copia.querySelector(".lugares-carro").textContent = carro.lugares;

            copia.querySelector(".valor-carro").textContent =
                `R$ ${carro.precoDiaria}`;

            mostrar.appendChild(copia);

            cat = ""
        });

    })
})