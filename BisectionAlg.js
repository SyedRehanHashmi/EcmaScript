const Bisectionalg = (arrNum, findNum) => {
    let firstIndex = 0;
    let lastIndex = ArrNum.length - 1;
    let mid = math.floor((firstIndex + lastIndex) / 2);
    if (arrNum[mid] === findNum) {
        return mid;
    }
    else if (arrNum[mid] > findNum) {
        firstIndex = 0;
    }

};

console.log(Bisectionalg[2, 4, 5, 7, 8, 10, 13, 16, 45, 77, 120, 134, 145], 120);