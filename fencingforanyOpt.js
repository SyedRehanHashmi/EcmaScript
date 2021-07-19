const fencingforany = (edges, numberofwire, rate) => {
    let sum = 0;
    edges.forEach(element => {
        sum = sum + element;

    });
    return sum * numberofwire * rate;
};
console.log(
    `cost for fencing is Rs.${fencingforany[10, 15, 10, 10, 10, 10, 22], 5, 10}`
);