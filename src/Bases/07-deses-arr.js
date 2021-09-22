//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ personaje1, personaje2, personaje3 ] = personajes;

console.log( personaje1 );

/*console.log( personajes[0]);
console.log( personajes[1]);
console.log( personajes[2]);*/


const retornaArreglo = () => {
    return ['ABC',123];
}


const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tare
const useState = (valor) => {
    return [valor, () => { console.log('hola mundo') } ];
}

const [ nombre, setNombre ] = useState('goku');

console.log(nombre);
setNombre() ;