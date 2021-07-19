/*const biggernummulti = (num1, num2, num3, num4) => {
    let bignum = num1 > num2 ? num1 : num2;

    bignum = bignum > num3 ? bignum : num3;

    bignum = bignum > num4 ? bignum : num4;

    return bignum;
}
console.log(`bigger number is ${biggernummulti(25, 45, 60, 75)}`);*/

const biggernummulti = (num1, num2, num3, num4) =>
  Math.max(num1, num2, num3, num4);

console.log(`bigger number is ${biggernummulti(25, 45, 60, 75)}`);
