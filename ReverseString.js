const revStr = (str) => {
    const arrStr = str.split(" ");
    const newArr = [];
    for (i = arrStr.length - 1; i >= 0; i--) {
        newArr.push(arrStr[i]);
    }
    return newArr.join(" ");
};

console.log(revStr("I am Fine"))


// ---------------------

const arr2 = ["S", "R", "H"];

console.log(arr2.reduce((a, b) => b + a));