// https://www.codewars.com/kata/544aed4c4a30184e960010f4/javascript

function divisors(integer: number): number[] | string {   // return union type "number[] | string" por requerimento del ejercicio
  const max = Math.ceil(integer / 2 + 1);                 // maximo length del array = mitad + 1 de integer
  const result = [...Array(max).keys()]                   // genero un array (feo, pero hasta donde se, js no tiene ranges)
                  .slice(2)                               // le saco los 2 1ros elementos, asi no tengo que chequearlos cada vez en el filter
                  .filter(el => integer % el === 0);      // filtro los elementos divisibles. --podria haber hecho "el => !(integer % el)"--

  return result.length ? result : `${integer} is prime`;
};

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> //

const testNumber = Math.round(Math.random() * 10000);
const testResult = divisors(testNumber);

console.log(`Los divisores de ${testNumber} son : \n`, testResult);
