// https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript

function countSmileys(arr:string[]):number {
    const re = /(:|;)(-|~)?(\)|D)/
    return arr.filter(str => { return re.test(str) }).length
}
