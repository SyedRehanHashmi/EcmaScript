// console.log(PowerOfNum(225, 30));

function PowerOfNum(base, power) {
  return base ** power;
}
console.log(PowerOfNum(2, 3));


// --------------------------------------


const arr = [2, 3, 4];

console.log(arr.reduce((acc, num) => acc + num ** 3, 0));