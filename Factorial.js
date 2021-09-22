const factorial2 = (num) => {
    fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
};
    console.log(factorial2(12))
