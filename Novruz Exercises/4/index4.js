function moreThanAverage ( array ){

    let userArray = array.split(",");
    
    let b = [];

    let sum= 0 ;

    for(let z = 0; z < userArray.length; z++ ){
        sum = sum + Number(userArray[z]);
    }

    for(z = 0 ; z<userArray.length; z++){
        if(userArray[z]>(sum/userArray.length)){
            b.push(userArray[z]);
        }
    }

    return b;

}

let userNumbers = prompt("Enter your numbers(num1, num2, ... ):");

alert(moreThanAverage(userNumbers));

