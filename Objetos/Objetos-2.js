//Uso de use stric => el codigo debe ejecutarse en modo estricto
//Por ejemplo no se pueden usar variables no declaradas
"use strict";

const producto = {
    nombre: 'Monitor de 20 Pulgadas', // nombre = Llave o propiedad del objeto - Joshua = valor
    precio: 500,
    disonible: true,
}

//Nos permite usar algunos metodos para objetos
//Congela el objeto para no manipularse
Object.freeze(producto);
//Saber si un objeto esta congelado
console.log(Object.isFrozen(producto));




