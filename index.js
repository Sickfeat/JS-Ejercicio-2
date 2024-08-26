const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
console.log("-----------------------------------------");
// Ejercicio N°1!!!!!!!!!
const pizzaImpar = pizzas.forEach((pizza) => {
  if (pizza.id % 2 != 0) {
    console.log(`la ${pizza.nombre} contiene id impar`);
  }
});
console.log("-----------------------------------------");
// Ejercicio N°2

const pizzaSome = pizzas.some((pizza) => pizza.precio < 600);

let validadorPizza =
  pizzaSome === true
    ? "Hay pizzas a menos de $600"
    : "No hay pizzas a menos de $600";

console.log(validadorPizza);
console.log("-----------------------------------------");
// Ejercicio N°3

const pizzaNombrePrecio = pizzas.forEach((pizza) => {
  console.log(`soy una ${pizza.nombre} y valgo $${pizza.precio}`);
});
console.log("-----------------------------------------");
// Ejercicio 4

const pizzaIngredientes = pizzas.forEach((pizza) => {
  console.log(
    `la ${
      pizza.nombre
    } tiene los siguientes ingredientes: ${pizza.ingredientes.toString()}`
  );
});
