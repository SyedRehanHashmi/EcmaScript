const greatNumInString = (str) => {
    const arrStr = str.split(" ");
    let maxStr = arrStr[0].length;
    let strData = arrStr[0];
    arrStr.forEach(element => {
        if (maxStr < element.length) {
            maxStr = element.length;
            strData = element;
        }
    });
    return strData;
}

    console.log(greatNumInString("I will hack NASA with hyper text markup language"));