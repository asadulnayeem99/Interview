const numbers = [5, 4, 87, 54, 5, 8];
const sqr = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
//   console.log(result);
  sqr.push(result);
}
console.log(sqr);

// by map
const result = numbers.map(function (element) {
  return element * element;
});
console.log(result);

//es6
const res = numbers.map(x=>x*x);
console.log(res);