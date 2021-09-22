const arr = ["S", "R", "H"];

console.log(arr.join(""));


// ------------------------------------


const arr1 = ["S", "R", "H"];
let text = "";

arr1.forEach(element => {
    text += element;
});

console.log(text)


// -------------------------------

const arr2 = ["S", "R", "H"];

console.log(arr2.reduce((a, b) => a + b)); 