
// const getImagenPromesa = () =>
//   new Promise( resolve => resolve('https://alsfkeiefna.com') )


// getImagenPromesa().then( console.log)

const getImagen = async() => {

  try {
    const apiKey = '9DQ5mTE5PNyelkZyMvpVQr91LQswg5Oj';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json()

    const {url} = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img);
  } catch (e) {
    console.error(e);
  }

}

getImagen()




// peticion
// .then ( resp => resp.json() )
// .then ( ({data}) => {
//   const {url} = data.images.original
//
//   const img = document.createElement('img');
//   img.src = url;
//
//   document.body.append (img);
//
// })
// .catch ( console.warn )
