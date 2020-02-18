// https://www.codewars.com/kata/53368a47e38700bd8300030d/javascript

var l = [
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Anibal" },
  { name: "Ramon" },
  { name: "Alfredo" },
  { name: "Mariano" },
  { name: "Enrique" }
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

function recursiveConcatenation(listaNombres: string[]): string {
  let text = "";
  if (listaNombres.length === 0) {
    return text;
  } else if (listaNombres.length === 1) {
    return listaNombres.shift() + recursiveConcatenation(listaNombres);
  } else if (listaNombres.length === 2) {
    return `${listaNombres.shift()} & ` + recursiveConcatenation(listaNombres);
  } else if (listaNombres.length >= 3) {
    return `${listaNombres.shift()}, ` + recursiveConcatenation(listaNombres);
  }
  return text; // tuve que agregar esto porque sino se quejaba que no tenia undefined o algo asi
}

function list(names: listaDeObjetos[]): string {
  return recursiveConcatenation(toList2(names));
}

let lista = list(l);

try {
  //el "!" se pone para asegurarle a TS que no va a ser null
  let resultado = document.getElementById("resultado")!;
  resultado.textContent = `Resultado: ${lista}`;
} catch (error) {
  console.log(lista);
}
