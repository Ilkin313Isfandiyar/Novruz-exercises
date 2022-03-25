function even_Numbers(array){

    let evenNumbers = [];

    for(i = 0 ; i<array.length; i++){
        if(array[i]%2==0){
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}


let n = prompt("How many numbers you want enter:");

let userNumbers = [];

for(let j = 0; j<n ; j++){
    userNumbers[j] = +prompt("Enter the Number:");
}

alert(even_Numbers(userNumbers));