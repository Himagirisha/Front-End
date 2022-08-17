var str="IMMUTABLE"
str.toUpperCase();
console.log(str);// not changed because its immutable



var str1="MUTABLE"
var lower=str1.toLowerCase();
console.log(lower)

console.log(str.charAt(3))//returns the character at the index specified

console.log(str.indexOf("M"))//returns the index number of the character

var wish="good afternoon"
console.log(wish.includes("noon"));

// var wish2=wish;
// console.log(wish.replace("good","bad"));//replace

// console.log(wish.replace("afternoon","morning"))
console.log(wish.replace("good","bad"));


var data="welcome to jungle";
const substr= data.substr(9,5)
console.log(substr);

var substring= data.substring(9,4);
console.log(substring)

var email="                xyz@gmail.com"
console.log(email);
console.log(email.trim());