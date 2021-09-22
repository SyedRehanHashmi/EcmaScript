const arr = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];
const newArr = [];
arr.map((item) => {
    if (typeof item === "number") {
        newArr.push(item)
    }
})
console.log (newArr);
console.log(newArr.reduce((a, b) => a + b))

