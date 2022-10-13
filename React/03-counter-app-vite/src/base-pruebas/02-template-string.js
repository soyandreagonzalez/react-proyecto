

export function getSaludo( nombre ) {
    return 'Hola ' + nombre;
}

const nombre = 'Andrea';
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );