const isPrime = (num) => {

    for (k = 2; k < num; k++) {
        if (num % k == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(17));

//------------------------------------------------------------//


function isPrime1(num) {

    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
console.log(isPrime1(20));

// -----------------MATH-LIBERARY--------------------------------//

const isPrime2 = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++)
        if (num % i === 0) return false;
        else
            return "PRIME Number"
};

console.log(isPrime2(23));