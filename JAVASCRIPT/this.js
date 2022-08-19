//global level this is refers to window object  
console.log(this); 
console.log(window) ; 
console.log(this===window); 

 
const personObj = {
    firstName: "Himagirisha", 
    lastName: "ND",
    getFullName: function () { 
    return this.firstName + this.lastName; 
    },
};
console. log(personObj.getFullName( ) ) ; 

console.log("==============Arrrays=======");

let arr = [1, 2, 3]; 
let arr2= [1, 2, 3]; 
console.log(arr== arr2); //false 
console.log(arr=== arr2); //false 
console.log(null==0); -//false
console.log(null>0) //false
console.log(null>=0)//true  
console.log(1<2<3) // true 
console.log(3>2>1);//false