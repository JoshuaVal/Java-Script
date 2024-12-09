//Colección de pares= clave-valor
const producto = {
    nombre: 'Computador', //Nombre = LLave o propiedad, Computador = valor
    marca: 'MarcaPc',
    precio: 5000,
    caracteristicas: {
        almacenamiento: '500gb',
        ram: '16g'
    },
    procedencia: {
        pais: 'EEUU'
    }
}

//Impresion en consola
console.log(producto);

//Modificando valores del Objeto
producto.precio = 5500;

//Agregando propiedades al Objeto
producto.color = 'Negro';

//Eliminando propiedades del objeto
delete producto.precio;

//Acceder al objeto
console.log(producto.nombre);
console.log(producto['nombre']);

//Acceder a un objeto dentro de un objeto
console.log(producto.caracteristicas.almacenamiento);

//Destructuring 
//Reducir el codigo
//Acceder a uno o varios valores del Objeto
const {nombre, marca} = producto;
console.log(nombre, marca);

//Destructuring de un objeto anidado
const {caracteristicas:{almacenamiento, ram}} = producto;
console.log(almacenamiento, ram);


