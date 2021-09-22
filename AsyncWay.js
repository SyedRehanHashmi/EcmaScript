const TimeOut = () => {
    setTimeout(() => {
        console.log("First call");
    }, 3000),
        console.log("Second call");
}

TimeOut();


// This method also known as AsyncWay