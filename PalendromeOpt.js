const palendromeopt = (str) => {
    return str === str.split("").reverse().join("");

};
console.log(palendromeopt("madam"));