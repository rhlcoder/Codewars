// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

// Codigo feazo, pero aplicare el principio "working, beatiful, fast" (o algo asi)
// Ahora me funciona, no me enrosco, luego lo hare mejor

const n1 = "63829983432984289347293874";
const n2 = "90938498237058927340892374089";

function add(a, b) {
  const maxStr = (...args: string[]): number =>
      args.map(v => v.length).reduce((a, c) => (a > c ? a : c), 0);
  const mult = (n: number) => { return 14 - (n % 14) };
  const pad = (max: number) => (s: string) => s.padStart(max + mult(max), "0");
  const longest = maxStr(a, b);
  const maxPad = pad(longest);
  const chunk = (str: string): string[] => str.match(/\w{14}/g);
  const toNum = (str: string[]): number[] => str.map(v => parseInt(v));
  const chunkSum = (num1: number[], num2: number[]): string => {
      const len = num1.length
      let result = Array(len).fill(0);

      for (let i = 0; i < len; i++) {
          let el = result[i] + num1[i] + num2[i];

          if (el.toString().length > 14) {
              el = el - 10 ** 14
              result[i] += el
              result[i - 1] += 1
          } else {
              result[i] += el
          }
      }
      return result.join('');
  };

  return chunkSum(toNum(chunk(maxPad(a))),toNum(chunk(maxPad(b))))
}


console.log(add(n1, n2));
