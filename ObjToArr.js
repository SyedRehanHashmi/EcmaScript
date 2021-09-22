const Obj = {
    Name: "Rehan",
    City: "Nanded",
    Contact: 112233,
};

const keys = Object.keys(Obj);
console.log(keys);
const newArr = keys.map((key) => Obj[key]);
console.log(newArr);

// ------------------------


const values1 = Object.values(Obj);
console.log(values1);


// ------------------------

const entries1 = Object.entries(Obj);
console.log (entries1);

