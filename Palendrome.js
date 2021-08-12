const palendrome = (str) => {
    const arrStr = str.split("");
    for (let i = 0; i < Math.floor(i < arrStr.length / 2); i++) {
        if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palendrome("madam"));