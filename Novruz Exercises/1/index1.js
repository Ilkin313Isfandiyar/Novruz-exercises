function spaces(sentence){
    return sentence.length - 1;
}

let userSentence = prompt("Enter your sentence:").split(" ");

alert(spaces(userSentence));
