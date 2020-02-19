// https://www.codewars.com/kata/53368a47e38700bd8300030d/javascript

var l = [
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Federico" },
  { name: "Jazmin" },
  { name: "Gonzalo" },
  { name: "Camila" },
  { name: "Martin" }
];

//! ATENCION de esta manera pude hacer que no me de error al pasar el objeto a la funcion toList
// https://stackoverflow.com/questions/43338763/property-does-not-exist-on-type-object

interface listaDeObjetos {
  name: string;
}

// manera 1: usando "Array" escrito explicitamente
function toList(names: Array<listaDeObjetos>): Array<string> {
  return names.map(n => n.name);
}

// manera 2: usando abreviacion para lista "[]"
function toList2(names: listaDeObjetos[]): string[] {
  return names.map(n => n["name"]);
}

// Quise probar de hacerlo recursivamente, pero se ve horrible.
// se puede resolver usando "reduce"
function concat(nombres: string[]): string {
  let text = "";
  if (nombres.length === 0) {
    return text;
  } else if (nombres.length === 1) {
    return nombres.shift() + concat(nombres);
  } else if (nombres.length === 2) {
    return `${nombres.shift()} & ` + concat(nombres);
  } else if (nombres.length >= 3) {
    return `${nombres.shift()}, ` + concat(nombres);
  }
  return text; // tuve que agregar esto porque sino se quejaba que no tenia undefined o algo asi
}

function list(names: listaDeObjetos[]): string {
  return concat(toList2(names));
}
