let count = 1; // `count` es una variable. Almacena un número cuyo valor inicializamos en 1 

// `renderImage` es una función que renderiza la imagen de un pokemon dentro del documento html
// llamamos (o invocamos) esta función cada vez que cambiamos el valor de la variable `count`, para renderizar el pokemon correspondiente
function renderImage() {
  // `document` es una variable global. Consiste en la estructura html entera de la página web
  // usamos el método `getElementById` para seleccionar un elemento con un id específico
  // asimismo, la siguiente línea nos permite acceder al elemento `<div id="pokemon"></div>`
  let pokemonContainer = document.getElementById('pokemon');

  // la propiedad `innerHTML` nos permite actualizar el contenido HTML del elemento en el que se aplica, en este caso `pokemonContainer`
  pokemonContainer.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById('previous');
let next = document.getElementById('next');

// `onClick` es un registrador de eventos que se ejecuta cada vez que hacemos clic en el elemento en el que se aplica, en este caso `prev`
prev.onclick = function() {
  // bloque condicional: se ejecutará la línea de código al interior de las llaves {} si la condición entre los paréntesis () es verdadera
  if(count > 1) {
    count = count - 1;
    renderImage();
  }
}

next.onclick = function() {
  if(count < 649) {
    count = count + 1;
    renderImage();
  }
}

// ejecutamos o invocamos la función renderImage
renderImage();



