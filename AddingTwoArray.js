const AddtwoArray = (arr1, arr2) => arr1.map((item, index) => item + arr2[index]);

console.log(AddtwoArray([1, 2, 3, 4], [5, 6, 7, 8]));



//  when Array is not same //

const AddtwoArray1 = (arr1, arr2) => arr1.map((item, index) => item + (arr2[index] !== undefined ? arr2[index] : 0));

console.log(AddtwoArray1([1, 2, 3, 4], [5, 6, 7]));

// For each Method //

const AddtwoArray2 = (arr1, arr2) => {
    const newArr = [];

    arr1.forEach((element, index) => {
        newArr.push(element + arr2[index]);
    });
    return newArr;
};
console.log(AddtwoArray2([1, 2, 3, 4], [5, 6, 7, 8]));