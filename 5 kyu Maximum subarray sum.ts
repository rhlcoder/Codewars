// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

/* VERSION 1: intentare eliminar los for anidados */

function slicer(arr:number[], min:number, max:number) {
  return arr.slice(min, max).reduce((a, b) => {
    return a + b;
  }, 0);
}

function iterate(arr:number[]) {
  var res = [];
  for (let min = 0; min < arr.length; min++) {
    for (let max = min + 1; max <= arr.length; max++) {
      res.push(slicer(arr, min, max));
    }
  }
  return res;
}

function maxSequence(list:number[]) {
  return !list.length
    ? 0
    : iterate(list).reduce((acc, curr) => {
        return acc > curr ? acc : curr;
      }, 0);
}

/* VERSION 2: sin For, pero varias chapuzas para hacer flatten (que no anda en codewars por requerir node 12 */
/* Usa 2 maps y 3 reduces :( */

function maxSequence1(list: number[]): number {
  return !list.length
    ? 0
    : list
        .map((_, start, a) => a.map((_, end, aa) => aa.slice(start, end + 1)
        .reduce((a, b) => a + b, 0)))
        .reduce((a, b) => a.concat(b))
        .reduce((a, b) => (a > b ? a : b), 0);
}


/* Esta la hizo un genio de la internet con un solo reduce */
function maxSequence(arr: number[]): number {
  let currentSum = 0;
  return arr.reduce((maxSum: number, number: number) => {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
}

/* Datos de prueba */

const f = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const g = [3, -2, 10, -6];
const h = [-2, -1, -3, -4, -1, -5];

console.log(maxSequence(f));
console.log(maxSequence(g));
console.log(maxSequence(h));
