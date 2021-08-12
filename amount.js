/*const mileagecost = (distance, mileage, fuelprice) =>
  (distance / mileage) * fuelprice;

console.log(`mileage cost is ${mileagecost(300, 50, 100)}`);*/

const mileagecost = (distance, mileage, fuelprice) =>
Math.round   (distance / mileage) * fuelprice;

console.log(`Amount need to fill fuel is Rs.${mileagecost(306,37,110.18)}`);

 //  this step for making round figaure
// console.log(Math.floor(12.75));