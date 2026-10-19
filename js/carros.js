const mostrar = document.querySelector(".categoriasMostrar");
const template = document.querySelector("#template-carro");

const categorias = document.querySelectorAll(".cards-categorias");

categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        window.location.href =
            `./pages/categorias.html?categoria=${categoria.dataset.categoria}`;
    });
});

// Lista de veículos
export const carros = [
    {
        id: 1,
        nome: "Fiat Argo",
        categoria: "economico",
        imagem: "../assets/images/cars/argo.jpg",
        precoDiaria: 80,
        lugares: 5,
        cambio: "Manual",
        malas: 2,
        combustivel: "Flex"
    },
    {
        id: 2,
        nome: "Chevrolet Onix",
        categoria: "economico",
        imagem: "../assets/images/cars/onix.jpg",
        precoDiaria: 85,
        lugares: 5,
        cambio: "Manual",
        malas: 2,
        combustivel: "Flex"
    },
    {
        id: 3,
        nome: "Hyundai HB20",
        categoria: "economico",
        imagem: "../assets/images/cars/hb20.jpg",
        precoDiaria: 85,
        lugares: 5,
        cambio: "Manual",
        malas: 2,
        combustivel: "Flex"
    },
    {
        id: 4,
        nome: "Volkswagen Polo",
        categoria: "compacto",
        imagem: "../assets/images/cars/polo.png",
        precoDiaria: 95,
        lugares: 5,
        cambio: "Automático",
        malas: 2,
        combustivel: "Flex"
    },
    {
        id: 5,
        nome: "Toyota Yaris",
        categoria: "compacto",
        imagem: "../assets/images/cars/yaris.jpg",
        precoDiaria: 105,
        lugares: 5,
        cambio: "Automático",
        malas: 2,
        combustivel: "Flex"
    },
    {
        id: 6,
        nome: "Toyota Corolla",
        categoria: "sedan",
        imagem: "../assets/images/cars/corolla.jpg",
        precoDiaria: 149,
        lugares: 5,
        cambio: "Automático",
        malas: 3,
        combustivel: "Flex"
    },
    {
        id: 7,
        nome: "Honda City",
        categoria: "sedan",
        imagem: "../assets/images/cars/city.jpg",
        precoDiaria: 130,
        lugares: 5,
        cambio: "Automático",
        malas: 3,
        combustivel: "Flex"
    },
    {
        id: 8,
        nome: "Chevrolet Tracker",
        categoria: "suv",
        imagem: "../assets/images/cars/tracker.jpg",
        precoDiaria: 140,
        lugares: 5,
        cambio: "Automático",
        malas: 3,
        combustivel: "Flex"
    },
    {
        id: 9,
        nome: "Jeep Renegade",
        categoria: "suv",
        imagem: "../assets/images/cars/renegade.jpg",
        precoDiaria: 145,
        lugares: 5,
        cambio: "Automático",
        malas: 3,
        combustivel: "Flex"
    },
    {
        id: 10,
        nome: "Jeep Compass",
        categoria: "suv",
        imagem: "../assets/images/cars/compass.jpg",
        precoDiaria: 180,
        lugares: 5,
        cambio: "Automático",
        malas: 4,
        combustivel: "Flex"
    }
];



document.addEventListener("DOMContentLoaded", () => {

    // Confere se esta página possui o container e o modelo
    if (!mostrar || !template) {
        return;
    }

    // Lê a categoria recebida pela URL
    const parametros = new URLSearchParams(window.location.search);
    const cat = parametros.get("categoria");

    // Filtra os carros da categoria escolhida
    const categoriaFiltro = carros.filter(carro => carro.categoria === cat);

    // Se não houver carros para mostrar
    if (categoriaFiltro.length === 0) {
        mostrar.textContent = "Nenhum carro encontrado nesta categoria.";
        return;
    }

    // Cria um card para cada carro encontrado
    categoriaFiltro.forEach(carro => {

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

/*
function carregar() {
    const parametros = new URLSearchParams(window.location.search);
    const cat = parametros.get("categoria");
    const categoriaFiltro =
        carros.filter(carro => carro.categoria === cat);

    categoriaFiltro.forEach(filtrado => {
        const nomeCarro = document.createElement("h3");
        nomeCarro.innerHTML = filtrado.nome;

        const basicAtributos = document.createElement("span");
        basicAtributos.innerHTML = `${filtrado.categoria} • 
        ${filtrado.cambio} • ${filtrado.combustivel}`

        const price = document.createElement("span");
        price.innerHTML = filtrado.precoDiaria

        const btnReservar = document.createElement("a");
        btnReservar.innerHTML = "Reservar"
        btnReservar.setAttribute("class", "btn-hero");

        mostrar.appendChild(nomeCarro);

    });

}




 categoriaFiltro.forEach(filtrado => {
            const nomeCarro = document.createElement("h3");
            nomeCarro.innerHTML = filtrado.nome;

            const basicAtributos = document.createElement("span");
            basicAtributos.innerHTML = `${filtrado.categoria} • 
        ${filtrado.cambio} • ${filtrado.combustivel}`

        const price = document.createElement("span");
        price.innerHTML = filtrado.precoDiaria

        const btnReservar = document.createElement("a");
        btnReservar.innerHTML = "Reservar"
        btnReservar.setAttribute("class", "btn-hero");

        mostrar.appendChild(nomeCarro);

        });

        */