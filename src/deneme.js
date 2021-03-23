const numbers = [10, 20, 30, 40];

const topla = (ilkdeger, ikincideger) => ilkdeger + ikincideger;


console.log(numbers.reduce(topla));
// Sonuç 100


console.log(numbers.reduce(topla, 50));
// Sonuç 150
