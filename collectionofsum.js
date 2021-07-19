const collectionofsum = (number) => {
    let sumeven = 0;
    let sumodd = 0;
    number.forEach((element) => {
        element % 2 == 0
            ? (sumeven = sumeven + element)
            : (sumodd = sumodd + element);

    });
    return `sum of even number=${sumeven} and
    sum of of odd number=${sumodd}
    Total sum=${sumeven + sumodd}`;
};

console.log(collectionofsum([5, 2, 7, 9, 10, 8, 17, 115, 10]));