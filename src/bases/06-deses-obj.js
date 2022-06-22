
// Desestructuracion
// Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'General',
};

const { nombre, edad, clave, } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const cc = ({ clave, nombre, edad, rango = 'Capitán' }) => {

  //console.log(nombre, edad, rango,);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: -14.2344,
      lng: 123.452,
    }
  }
};

const {anios, nombreClave, latlng:{lat, lng}} = cc(persona);


console.log(anios, nombreClave);
console.log(lat, lng);
