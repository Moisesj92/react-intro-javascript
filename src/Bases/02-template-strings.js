//Template Strings

const nombre = 'Arsenio';
const apellido = 'jimenez';

const nombreCompleto = nombre + ' ' + apellido;
//En las template string todo lo que esta dentro de llaves es codigo javascript
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

//incluso llamado a funciones
function getSaludo(nombre){
    //Si las funciones no tienen un return explicito devoleran undefined
    return 'Hola' + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`);
