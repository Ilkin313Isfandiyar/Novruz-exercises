let arr1 = prompt("Enter your text with ,:").split(",")
let arr2 = prompt("Enter your text with ,:").split(",")

function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}

alert(getMatch(arr1,arr2));