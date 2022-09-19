const item = document.getElementById("item");



const disfraces = [
    {
        id: 1,
        nombre: "Vegeta",
        precio: 350,
        img: "img/Sayayin.jpg",
        descripcion: "Disfraz de Sayayin modelo Vegeta.",
        tallas: "Tallas CH - G",
    },
    {
        id: 2,
        nombre: "Princes",
        precio: 450,
        img: "../img/princes.jpg",
        descripcion: "Disfraz de Princesa en color rosa.",
        tallas: "Tallas CH - XL",
    },
    {
        id: 3,
        nombre: "Sirenita",
        precio: 420,
        img: "../img/Ariel.jpg",
        descripcion: "Disfraz de Sirenita, modelo de la película original.",
        tallas: "Tallas CH - G",
    },
    {
        id: 4,
        nombre: "Hipo",
        precio: 390,
        img: "./img/ipo.jpg",
        descripcion: 'Disfraz de Hipo "Como entrenar a tu dragón"',
        tallas: "Tallas CH - XXL",
    },
];

let carrito = [];

disfraces.forEach((disfraz) => {
    let content = document.createElement("div");
    content.innerHTML = `
        <img src = ${disfraz.img}">
        <p>${disfraz.descripcion}</p>
        <p>${disfraz.tallas}</p>
        <label>${disfraz.precio}</label>
    `;

    item.append(content);
});