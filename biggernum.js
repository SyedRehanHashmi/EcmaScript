function biggernum(num1 ,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(biggernum(13,26));
console.log(biggernum(450,750));
console.log(`Bigger number is ${biggernum(544,566)}`);