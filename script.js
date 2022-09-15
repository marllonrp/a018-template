const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// A segunda deve receber um array de números, e retornar um array apenas com os números pares.

const array1 = [8, 9, 23, 96, 45, 44, 48];

// let multiplicarRetornaPares = (array) => {
//   let newArray = [];
//   for (numero of array) {
//     if ((numero * 3) % 2 === 0) {
//       newArray.push(numero * 3);
//     }
//   }
//   return newArray
// };

// console.log (multiplicarRetornaPares(array1))

// const filterarray = array1.filter((numero) => {
//   if (numero % 2 === 0) {
//     return numero;
//   }
// });

// console.log (filterarray)

let vidaPokemon = (pokemon) => pokemon.vida = 100


let pokemonsVidaCheia = pokemons.map((elemento) => {
  vidaPokemon(elemento)
  return elemento
})

console.log(pokemonsVidaCheia)

const pokemonFogo = pokemons.filter((pokemon) => pokemon.tipo === "fogo")

console.log(pokemonFogo)