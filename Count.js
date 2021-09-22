const subexist = (str) => {
    const arrstr = str.split(" ")
    let cnt = 0
    arrstr.forEach((element) => {
        if (element == 'lorem') {
            cnt = cnt + 1
        }

    });
    return cnt
}
const strData = " lorem lorem loremissentence lorem whoever lorem subexist lorem "
console.log(subexist(strData))



// ------------------------------------------optimum----------------------

const optimum = (string) => {

    return string.split(" ").filter((item) => item === 'lorem').length
}
const strdata = " lorem lorem loremissentence lorem whoever lorem subexist lorem even oddvalue who lorem "
console.log(optimum (strdata))