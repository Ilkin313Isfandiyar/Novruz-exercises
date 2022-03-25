let userSentence = prompt("Enter your words with ,:").split(",");

let n = prompt("Starts with which letter:");




function firstLetter(sentence,l){

    let h = [];

    for (let i=0;i<sentence.length;i++){
        if(sentence[i].startsWith(l)){
            h.push(sentence[i]);
        }
      

      }

      return h;
  }
  
  
alert(firstLetter(userSentence,n))