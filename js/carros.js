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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
           imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
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
        imagem: "../assets/images/cars/compass1.png",
        imagens: [
            "compass2.png",
            "compass3.png",
            "compass4.png",
            "compass5.png"
        ],
        precoDiaria: 180,
        lugares: 5,
        cambio: "Automático",
        malas: 4,
        combustivel: "Flex"
    }
];

export const grupos = [
    {
        id: 1,
        nome: "Grupo C",
        descricao: "Econômico com ar",
        modelos: "GM Onix Joy 1.0, VW Gol 1.0 ou similar",
        precoDiaria: 149,
        imagens: [
            "GOLC.png",
            "ONIXx.png"
        ]
    },
    {
        id: 2,
        nome: "Grupo CE",
        descricao: "Econômico Especial C/ar",
        modelos: "Hyundai HB20, Fiat Argo, VW Polo ou similar",
        precoDiaria: 179,
        imagens: [
            "HB2X.png",
            "POLA.png",
            "ARGO.png",
            "PEUC.png",
            "CTC3.png"
        ]
    },
    {
        id: 3,
        nome: "Grupo CS",
        descricao: "Econômico Sedan com ar",
        modelos: "Hyundai HB20S, GM Onix Plus, Fiat Cronos ou similar",
        precoDiaria: 149,
        imagens: [
            "HB2C (1).png",
            "ONIXPLUS.png",
            "CRONOS.png"
        ]
    },
    {
        id: 4,
        nome: "Grupo G",
        descricao: "SUV Manual",
        modelos: "VW Tera, Citroen Basalt 1.0, Fiat Pulse 1.3 ou similar",
        precoDiaria: 209,
        imagens: [
            "TERA.png",
            "BASALT.png",
            "PULSE.png"
        ]
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