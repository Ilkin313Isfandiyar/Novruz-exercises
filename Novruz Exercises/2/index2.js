function average(array){

    let userArray = array.split(",");

    let sum = 0 ;

    let a;

    for(let z = 0; z < userArray.length; z++ ){
        sum = sum + Number(userArray[z]);
}
    a = sum / userArray.length;
    
    return a;
}

let userNumbers = prompt("Enter your numbers(num1, num2, ... ):");

alert(average(userNumbers));