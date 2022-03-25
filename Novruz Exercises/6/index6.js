


let array_meyve = ["alma" , "armud" , "banan" , "ananas"];

function reverse(array){

    let reverseArray = [];

    for (let i = array.length - 1; i >= 0; i--){ 
        reverseArray.push(array[i])   ;
    }

    return reverseArray;

}

console.log(reverse(array_meyve));



