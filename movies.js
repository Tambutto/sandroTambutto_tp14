// --- MICRO DESAFIO 2 ---

// 2- Creo la estructura para almacenar las peliculas

let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor:amor y trueno"];

// 3- Creo funcion 

function peliculaMasVendida (pelicula){

       return  pelicula.toUpperCase();
        
    }

let peliculaMayuscula = peliculaMasVendida("Thor:amor y trueno");

// console.log(peliculaMayuscula);

let nuevoArrayPeliculas = peliculas.pop();

peliculas.unshift(peliculaMayuscula);

console.log(peliculas);

// CREO UNA NUEVA CADENA DE TEXTO CON PELICULAS A ESTRENAR

let peliculasAEstrenar = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

let proximasPelisAEstrenar = peliculasAEstrenar.join(', ');
console.log(proximasPelisAEstrenar);

// 

function todasLasPeliculas (array1, array2){
    return array1.concat(array2);
}
 
let arregloConTodasLasPeliculas = todasLasPeliculas(peliculas,proximasPelisAEstrenar);

console.log(arregloConTodasLasPeliculas);