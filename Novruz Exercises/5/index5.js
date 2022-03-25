function words(text) {
    let a = text.split(" ").join(",");

    return a;
}

let userText = prompt("Enter your words with spaces:");

alert(words(userText));