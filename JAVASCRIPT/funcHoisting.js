console.log("outside the func a",a);//undefined
var a=20;
var b=30;//global variable

console.log("outside the func",b);//30

// vsriable hoisting inside the func

function test(){
    console.log("b inside the function",b);//undefined
    var b=10;//inside func local var has high priority
    console.log("a inside the func",a);//20
    console.log(b);
}

test();


//hoisting: hoisting is techinique which moves
//variable and func to top of the scope before 
//code execution begins

//function hoisting is possible onlyfor named functions
add(2,4);

var name="megha";

function add(a,b){
    console.log(a+b);
}

greet();

var greet= function(){
    console.log("good morning");
};