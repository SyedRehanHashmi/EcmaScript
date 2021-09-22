const arr1 = [1, undefined, "Rehan", 3, 5, {}, 56677, 3.56, null]

const arr2 = [];

arr1.forEach(element => {
    if (typeof element === "string") {
        arr2.push(element.toUpperCase());
    }
});
console.log(arr2);