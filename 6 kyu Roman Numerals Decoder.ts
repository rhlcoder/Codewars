// https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript

/* 
    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1000
    IV         4
    IX         9
    XL         40
    XC         90
    CD         400
    CM         900
*/

function solution(roman:string) {
    const romanDual = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    const romanSingle = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    return roman
        .split('')
        .map((v, i, a) => {
            const key = a[i] + a[i + 1];
            if (key in romanDual) {
                v = romanDual[key];
                a.splice(i + 1, 1)
            } else {
                v = romanSingle[a[i]];
            }
            return v
        })
        .filter((a) => { return Number.isInteger(a) })
        .reduce((a, b) => { return a + b })

}

console.log(solution("MCMXC"))
console.log(solution("MMVIII" ))
console.log(solution("I"))
