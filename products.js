// ---TP 14 DESAFIO 1---

// Creo el Array de 6 productos electro

let electro = ["plancha", "cafetera", "cocina", "televisor", "notebook", "lavarropas"];

// Muestro por consola de manera arbitraria los mismos

console.log(electro[2]);
console.log(electro[5]);
console.log(electro[0]);
console.log(electro[4]);

// Extraigo el primer elemento del array, lo retorno en una variable y lo agrego al final.

let primero = electro.shift();

console.log(electro);

electro.push(primero);

console.log(electro);

// Agrego dos nuevo productos al final de array

electro.push("planchita", "tostadora");
console.log(electro);

// Muestro por consola la cantidad de elementos que contiene el array

console.log(electro.length);

// Busco un elemento y creo una condicion respondable de establecer si existe o no el producto dentro del array. Si existe muestro el mensaje "Producto encontrado", Sino muestro "el producto buscado no existe".

function buscar(array, elemento){

    for (let i = 0; i < electro.length; i++) {
        
        if (array[i] == elemento){
            console.log("Producto encontrado");
            return;
        } else {
            console.log("El producto buscado no existe");
        }
    
    }
}

buscar(electro, "lavarropas");

// Unifico los elementos del array en una cadena de texto separandolos por espacios en blanco

let arrayUnificado = electro.join(' ');
console.log(arrayUnificado);

// Determino la cantidad de elementos que posee la cadena obtenida

console.log(arrayUnificado.length);

// Cambio el nombre de un producto por otro (cocina por anafe)

let electro2 = arrayUnificado.replace('cocina', 'anafe');
console.log(electro2);

// Vuelvo a obtener un array con la cadena obtenida

let electro3 = electro2.split(' ');
console.log(electro3);


