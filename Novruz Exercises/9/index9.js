

function countAllCharacters(str) {
    let a = str.split("");
    let obj = {};
    a.forEach(function(s){
      let count=0;
      for(let j=0;j<a.length;j++){
        if(s==a[j]){
          count+=1;
        }
        obj[s]=count;
      }
    });
    return obj;
  }

  let a = prompt("Enter your word:");

 console.log(countAllCharacters(a));
