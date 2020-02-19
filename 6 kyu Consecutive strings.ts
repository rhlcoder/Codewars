// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

function longestConsec(strarr: string[], k: number) {
  return strarr.length === 0 || k > strarr.length || k <= 0 
    ? ""        // si alguna de las condiciones de arriba == true -> devuelve ""
    : strarr    // sino, se ejecuta el resto
        // map(value, index, array) -- como a 'value' no lo uso, lo reemplazo por un '_'
        .map((_, i, a) => {
          return a.slice(i, k + i).join(""); // tomo 'k' indices consecutivos y los concateno
        })
        //arr.reduce( fn( accumulator, currentValue, index, array), initialValue )
        .reduce((acc, curr) => {
          return acc.length >= curr.length ? acc : curr; // voy comparando acc vs curr -> el return asigna al mayor a acc.
        }, ''); // el initialValue en este caso no es necesario, porque TS infiere que es un string, pero por las dudas lo pongo
}

/** soluciones copiadas de las respuestas */

// usando solo un reduce
function longestConsec1(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join("");
    return currString.length > long.length ? currString : long;
  }, "");
}

// usando solo un map
function longestConsec2(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return "";
  let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join("").length),
    i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join("");
}
