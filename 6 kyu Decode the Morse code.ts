// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
const MORSE_LIST = {
".-"        : "A",  "-..."      : "B",  "-.-."      : "C",  "-.."       : "D",
"."         : "E",  "..-."      : "F",  "--."       : "G",  "...."      : "H",
".."        : "I",  ".---"      : "J",  "-.-"       : "K",  ".-.."      : "L",
"--"        : "M",  "-."        : "N",  "---"       : "O",  ".--."      : "P",
"--.-"      : "Q",  ".-."       : "R",  "..."       : "S",  "-"         : "T",
"..-"       : "U",  "...-"      : "V",  ".--"       : "W",  "-..-"      : "X",
"-.--"      : "Y",  "--.."      : "Z",  "-----"     : "0",  ".----"     : "1",
"..---"     : "2",  "...--"     : "3",  "....-"     : "4",  "....."     : "5",
"-...."     : "6",  "--..."     : "7",  "---.."     : "8",  "----."     : "9",

".-.-.-"    : ".",  "---..."    : ":",  "-.-.-."    : ";",  "..--.."    : "?",
"-...-"     : "=",  ".----."    : "'",  "-..-."     : "/",  "-.-.--"    : "!",
"-....-"    : "-",  "..--.-"    : "_",  "-.--."     : "(",  "-.--.-"    : ")",
"...-..-"   : "$",  ". . . ."   : "&",  ".--.-."    : "@", //"--..--'  : ", ",

"...---..." : "SOS",
};


// function decodeMorse(morseCode: string): string {
//   return morseCode
//     .trim()
//     .replace(/(?<=(-|\.))\s(?=(-|\.))/g, 'x')
//     .replace(/   /g,'x x')
//     .split('x')
//     .map(morse => MORSE_CODE[morse] || ' ')
// }

// Esta version no funciona en codewars porque "matchAll" pertenece a ES2020, pero funciona bien.

/* exprimiendo el regex como un campeon:
  [-.]+       --> Cualquier combinacion de codigo morse
  (?<=[.-]\s) --> Al fin implementaron lookbehinds en JS! Indica que le precede un '. ' o un '- '
  \s          --> un espacio
  (?=\s[.-])  -->  Tambien uso un lookahead. Este indica que le sucede un ' .' o un ' -'
  /g          --> para que busque en todo el string, sino devuelve solo el primer match
*/
const re = /[-.]+|(?<=[.-]\s)\s(?=\s[.-])/g 

function decodeMorse(morseCode: string): string {
  return Array.from(
    morseCode
    .matchAll(re), m => m[0]) 
    .map(morse => MORSE_CODE[morse] || ' ')
    .join('')
}
