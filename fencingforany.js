const fencingforany = (edges, numberofwire, rate) => {
    let sum = 0;
    for (let i = 0; i < edges.length; i++) {
        sum = sum + edges[i];
    }
    return sum * numberofwire * rate;
};
console.log(
    `cost for fencing is Rs.${fencingforany([10, 15, 10, 10, 10, 10, 22],5, 10)}/-`
);