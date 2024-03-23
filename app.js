//alert("JAVASCRIPT CLASS");

// var text = "The New Yorker magazine doesn't allow the phrase world War II. They say it should be";

// for (var i = 0; i < text.length; i++){
//     if (text.slice(i, i + 12) === "world War II"){
//         text = text.slice(0, i) + "the second world war" + text.slice(i + 12);
//     }
//     console.log(text);
// }


// console.log(text.replace("World War II","the second world war"));



// var name = "abc";

// name = name + 123;

// console.log(name);



// maham
// civic
// refer
// level
// wow
// deed
// noon



// var word = prompt("Enter a word....")
// var update = "";

// for (var i = word.length - 1; i >= 0; i--) {
//     update += word[i];
// }

// if (word === update) {
//     console.log("It is a plaindrom word...");
// }
// else {
//     console.log("It is not a palindrome word...");
// }


var headUser = prompt("Enter your name");

var tailUser = prompt("Enter your name")

var toss = Math.random() * 2;

var convert = Math.floor(toss);

if (convert === 0){
    alert ("Congratulation " + headUser + ", you are the winner!");
}else{
    alert ("Congratulation " + tailUser + ", you are the winner!");
}