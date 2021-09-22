const marks = (Number) => {
    let TotalOfNumbers = 0;
    Number.forEach((element) => {
        TotalOfNumbers = TotalOfNumbers + element;

    });
    const average = TotalOfNumbers / Number.length;
    return average;

}
console.log(marks([45, 43, 84, 89, 68]));

console.log(marks([45, 43, 67, 89, 68]));

console.log(marks([45, 43, 67, 98, 68]));

