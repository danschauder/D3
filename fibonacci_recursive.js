const fibonacci = n => {
    if (n<=1) {
        return 0;
    }
    else if (n==2){
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

for (let i=0;i<20;i++){
    console.log(fibonacci(i))
}