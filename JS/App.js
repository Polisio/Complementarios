const card = document.getElementById("card");


const disfraces = [
    {
        id: 1,
        nombre: "Vegeta",
        precio: 350.00,
        img: "img/Sayayin.jpg",
        descripcion: "Disfraz de Sayayin modelo Vegeta.",
        tallas: "Tallas CH - G",
    },
    {
        id: 2,
        nombre: "Princes",
        precio: 450.00,
        img:"img/princes.jpg",
        descripcion: "Disfraz de Princesa en color rosa.",
        tallas: "Tallas CH - XL",
    },
    {
        id: 3,
        nombre: "Sirenita",
        precio: 420.00,
        img: "img/Ariel.jpg",
        descripcion: "Disfraz de Sirenita, modelo de la película original.",
        tallas: "Tallas CH - G",
    },
    {
        id: 4,
        nombre: "Hipo",
        precio: 390.00,
        img: "img/ipo.jpg",
        descripcion: 'Disfraz de Hipo "Como entrenar a tu dragón"',
        tallas: "Tallas CH - XXL",
    },
];

let carrito = [];

disfraces.forEach((disfraz) => {
    let informacion = document.createElement("div");
    informacion.className = "formStyle"
    informacion.innerHTML = `
    <img class="styleImgFlt" src = ${disfraz.img}>
    <p class="style">${disfraz.descripcion}</p>
    <p class="style">${disfraz.tallas}</p>
    <label><b>Precio: $ ${disfraz.precio}</b></label><br>
    <button class="boton" type="submit"><span>Agregar</span></button>
`;

card.append(informacion);
});

