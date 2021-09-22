let lcm = (n1, n2) => {
    
    let large = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    
    
    let i = large;
    while(i % small !== 0){
      i += large;
    }
    
    return i;
  }

  console.log(lcm(20, 15));

  