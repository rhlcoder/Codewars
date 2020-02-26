// https://www.codewars.com/kata/559a28007caad2ac4e000083/solutions/javascript

// use la memoizacion de una pagina, pero no me detuve a analizar como funciona
// https://www.jstips.co/en/javascript/speed-up-recursive-functions-with-memoization/

var fibonacci = (function () {
  var cache = [0, 1]; // cache the value at the n index
  return function(n:number) {
    if (cache[n] === undefined) {
      for (var i = cache.length; i <= n; ++i) {
        cache[i] = cache[i - 1] + cache[i - 2];
      }
    }
    return cache[n];
  }
})();

const perimeter = (n: number) => {
  return [...Array(n + 2).keys()]
    .map(n => fibonacci(n) * 4)
    .reduce((a, c) => a + c, 0);
}
