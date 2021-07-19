const fencingforrectangle = (b, w numberofwire, costperfeet) => {
    const parimeter = b + w + b + w;
    const totalcost = parimeter * numberofwire * costperfeet;
    return totalcost;

};

console.log(`total cost for fencing is Rs.${fencingforrectangle(10, 12, 18, 2, 10)} `);