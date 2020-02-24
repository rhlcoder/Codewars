// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str: string): string {
  return str
    .split(" ")
    .map(v => {
      return v.match(/[a-z]/i)
        ? `${v.substring(1)}${v.substring(0, 1)}ay`
        : v;
    })
    .join(" ");
}
