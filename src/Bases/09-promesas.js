//Promesas
import {getHeroeBiId, getHoroesByOwner} from "./Bases/08-imp-exp";

// const promesa = new Promise ( (resolve, reject) => {
//     setTimeout( () => {


//         const heroe = getHeroeBiId(2);
//         console.log("2 segundos despues");
//         //resolve( heroe );
//         reject( 'heroe no encontrado' );

//     }, 2000 );
// });

// promesa.then( (heroe) => {
//     console.log("then de la promesa", heroe);
// }).catch( (err) => {
//     console.warn( err) 
// });

const getHeroeBiIdAsync = (id) => {


    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
    
    
            const heroe = getHeroeBiId(id);


            if(typeof heroe === 'undefined')
                reject('heroe no encontrado');

            resolve( heroe );
    
        }, 2000 );
    });

}

getHeroeBiIdAsync(1)
    .then( console.log )
    .catch( console.warn );