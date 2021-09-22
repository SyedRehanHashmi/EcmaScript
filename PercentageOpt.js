// const marks = (numbers) =>{
//     const total=numbers.reduce((accumulator,accurance)=>accumulator + accurance );
//     return total / numbers.length;
// };
// console.log(marks([45, 43, 67, 98, 68]));

// ------One-Liner-------

const marks = (numbers) =>
numbers.reduce ((accumulator,accurance)=>accumulator + accurance) /numbers.length;

console.log(marks([45, 43, 67, 98, 68]));
