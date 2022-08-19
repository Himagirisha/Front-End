// named function
// syntax  function name(parameters){----body---}

function add(a,b){
    return a+b;

}
console.log(add(5,2));

// anonymous function
// syntax let x= function(parameters){----body---}

let mulanony=function(a){
    return a*a;
} //function expression

console.log(mulanony(10));

// Arrow function

let arrowFunc=(argumets)=>{
    //statements
}

arrowFunc()

// Immediately invoked functions

// (function(arguments){

// })
// ();//

function addd(a,b){
    let sum=a+b;
    console.log(`sum of ${a} and ${b}`,sum);
}
addd(4,5)
addd(8,2)

// passing function as an argument

function FindIfEligibleOrNot(age){
    if(age>=18)
    return true;
    else
    return false;
}
let result=FindIfEligibleOrNot(13);


function PrintEligibleOrNot(arg){
    if(arg===true)
    console.log("eligible for voting")
    else
    console.log("not")
    
}
PrintEligibleOrNot(result);

(function substraction(a,b){

    let sub=a-b;
    console.log(sub)


}
)
(6,2)
// when you have asingle line your function
// body no need of curly braces

let product=(a)=>a*a;
console.log(product(4));

// if u have only one arg no need of parenthesis and curly
let square=b=>b*b;
square();

// if no parameter then parenthesis is mandatory
let names=()=>console.log("data is safe in arrow func");
names();