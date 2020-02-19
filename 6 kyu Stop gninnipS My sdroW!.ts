// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

function spinWords(st:string) {
    return st
        .split(' ')
        .map(a => { return (a.length >= 5) ? a.split('').reverse().join('') : a})
        .join(' ')
}
