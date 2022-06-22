
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 53452,
        lat: 14.3543,
        lng: 34.8762,
    }
};

//console.table( { persona } );
console.log( persona );

const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona2);
