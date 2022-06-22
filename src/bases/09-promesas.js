import {getHeroeById, getHeroesByOwner} from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//
//     const heroe = getHeroeById(3);
//     resolve(heroe);
//     //reject('No se pudo encontrar el heroe');
//   }, 2000)
// });

// promesa
// .then  ( data => console.log('heroe ->', data) )
// .catch ( err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      const p1 = getHeroeById(id);
      if ( p1 ) { resolve(p1); }
      else { reject(`El Héroe con ID: ${id}, no existe!`) }
      //reject('No se pudo encontrar el heroe');
    }, 2000)
  });
}

getHeroeByIdAsync(1)
.then( console.log )
.catch ( console.warn )
