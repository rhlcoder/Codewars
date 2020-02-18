//https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript

function divisors(integer: number): number[] | string {
    const max = Math.ceil(integer / 2 + 1);
    const result = [...Array(max).keys()]
                    .slice(2)
                    .filter(el => integer % el === 0);

    return result.length ? result : `${integer} is prime`;
};

// <><><><><><><><><><><><> //

const testNumber = Math.round(Math.random() * 10000);
const testResult = divisors(testNumber);

console.log(`Los divisores de ${testNumber} son : \n`, testResult);
