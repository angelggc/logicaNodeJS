function fizz_buzz(num) {
    let arrayNum = [];
    for (let i = 1; i <= num; i++) {
        let mult3 = false;
        let mult5 = false;

        if(i%3 == 0){
            mult3 = true;
        };
        
        if(i%5 == 0){
            mult5 = true;
        };

        if (mult3 && mult5) {
            arrayNum.push("FizzBuzz")
        }else if(mult3){
            arrayNum.push("Fizz")
        }else if(mult5){
            arrayNum.push("Buzz")
        }else{
            arrayNum.push(i)
        }
        
    };

    return arrayNum
}
