const RemoveDuplicateFromString = (str) => {
    const arrStr = str.split(" ");
    const uniqueArr = [...new Set(arrStr)];
    return uniqueArr.join(" ");
};

console.log(RemoveDuplicateFromString("I am Good. I want to go. I am fine"));

// < ------------------------------------------------------------>

const findSortedUniqueArray = (objArr) => {
    let margedArr = [];
    objArr.Data.forEach((element) => {
        margedArr = [...margedArr, ...element];
    });
    const uniqueArr2 = [...new Set(margedArr)].sort((a, b) => a - b);
    return uniqueArr2;
};
console.log(
    findSortedUniqueArray({
        Data: [
            [24.75, 12, 14, 1],
            [35, 24, 13, 2],
            [7, 1, 75, 24, 15, 7],
        ],
    })
);

// < ------------------------------------------------------------>

const findAllDuplicate = (arr) => {
    const newArr = [];
    arr.forEach((element) => {
        console.log(arr.indexOf(element));
    });
};
findAllDuplicate([1, 5, 2, 6, 7, 9, 1, 70, 45, 2, 89]);

// -----------------------------------------------

const findAllDuplicate3 = (arr) => {
    const newArr = [];
    arr.forEach((element, index) => {
        arr.indexOf(element) !== index && newArr.push(element);
    });
    return newArr;
};
console.log(findAllDuplicate3([1, 5, 2, 6, 7, 9, 1, 5, 70, 45, 2, 89]));

// -------------------------------------------

const RemoveDup = (myLorem) => {
    const newStr = myLorem.split(" ");
    const myElem = [];
    newStr.forEach((element, index) => {
        newStr.indexOf(element) !== index && myElem.push(element);
    });
    console.log(myElem);
    const myUnique = [...new Set(myElem)];
    return myUnique;
};

console.log(
    RemoveDup(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    )
);
