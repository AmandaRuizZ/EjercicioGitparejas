// agregar 2 nuevos sabores de helados al array


let iceCreamFlavors = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistacho",
  "Neapolitan",
  "Mint Chip",
<<<<<<< HEAD
<<<<<<< HEAD
=======
  "choripan",
  "huevo duro"
>>>>>>> ef545e3ca5567556cf7516d07f5922049a418a30
=======
  "Choripan",
  "Huevo duro",
  "Pescado"
>>>>>>> 043ee81a2d78ead5e47aec5411774054d442ebe3

let iWantAIceCream = window.prompt("Que sabor de helado deseas?", "");
let iceCreamFound;
for (let i = 0; i < iceCreamFlavors.length; i++) {
  if (iceCreamFlavors[i].toLowerCase() === iWantAIceCream.toLowerCase()) {
    iceCreamFound = iceCreamFlavors[i];
  }
}
if(iWantAIceCream === "") {
   console.log("No elegiste un sabor de helado");
} else if (iceCreamFound) {
  console.log(`Aquí está tu helado de ${iceCreamFound}, disfrútalo!`);
} else {
  console.log(`Lo siento, no tenemos helados sabor ${iWantAIceCream}`);
}

