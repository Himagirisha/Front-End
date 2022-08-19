let myArray=[10,20,30,40,50];
//psuh wmethod will add an element at yhe end 
//it will take a value
//it will return new array if we pushed any value
//else it will return length if arry
//it will cahnge the length of array

myArray.push(60);
console.log(myArray);
myArray.push(90,1,2,23);
console.log(myArray);

console.log(myArray.push());


//pop method doesnt take any argument
//pop method wil rmove the last elemnt of an array
//pop method will return removed items

console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop());

//it add element at start of array
//it wil return length of array
let fruits=["apple","banana","mango"];
fruits.unshift("kiwi");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);


//concat will jion  two or more array
//it will return joined new aray
//it will not change ur original array

let a=[1,2,3];
let b=[4,5,6];
let c=[7,8,9];
let res=a.concat(b,c)
console.log(res);

const arr1=[1,2,[7,8,]];
const arr2=[[4,5],6,8,9];
const arr3=arr1.concat(arr2);
console.log(arr3)


//flat will convert nested array to single array
console.log(arr1.flat());

//joim method will convert array to string

const cities=["tumkur","banglore","kolar","udupi"]
let string=cities.join(" ");
console.log(string);

//findIndex and indexOf

let arrayData=[10,20,230,40];

let x = arrayData.findIndex((age)=>{
    return age>18;
});

console.log(x);

//indexOf method will return the first index position of specified value
// it will return -1 if specified value is not present
console.log(arrayData.indexOf(0));
console.log(arrayData.indexOf(10));
console.log(typeof arrayData);
let r=10;
console.log(Array.isArray(arrayData));

//print in reverse 
let lamda="before a good leader be a good human"
let ba=lamda.split(" ");
ba.reverse();
console.log(ba);

//map();
//map takes callback function

let reverse="";
for(let i=lamda.length-1;i--;)
{
    reverse+=lamda[i];

}

console.log(reverse);

// lamda.map((value,index,arr)=>{
//     console.log(value,index);
// });

// lamda.filter((value,index,arr)=>{
//     console.log(value,"filter");
// });

let filterArr=[20,30,40,50,12,4,1]
filterArr.filter((value,ind,arr)=>{
    if(value>20){
        console.log(value);
    }
});

let filtered=filterArr.filter((value)=>{
    return value+10;

});

let mapped=filterArr.map((value)=>{
    return value+10;
})
console.log(filtered);
console.log(mapped);

hobbies=["gaming","tv","carrom","cricket"]
console.log(hobbies.includes("gaming"));
console.log(hobbies.includes("basketball"));

//find
//find method will take one callback fuction
//it returns the first element that matches the condtion
let arrFind=[1,4,,2,4,,244,4,12];

const found=arrFind.find((value)=>value>10);
console.log(found);
//sort
//1st method
let sortArr=new Float64Array([34,525,23,1,2,124,0]);
sortArr=sortArr.sort();
console.log(sortArr);
//2nd method
numArr=[1,23,43,101,3434,12]
numArr.sort(function(a,b){
    return a-b;
});
console.log(numArr);

//splice
//to add or remove elements in mid of array
//it affects original array
//3 Arguments(start index,no of elements to be removed,elements to be added)

let spliceArr=[1,3,23,4,34,9];

let splicedArr=spliceArr.splice(1,3,20,40);
console.log(splicedArr);
console.log(spliceArr);

//adding element without deleting

let noDel=spliceArr.splice(2,0,25,60);
console.log(spliceArr);
console.log(noDel);


//slice method
//slice method will return the new array
//it will take 2 arguments start 0
//to delete an element in mid of array

let sliceArr=["cit","sit","ssit","mit","nit"];

const data2=sliceArr.slice(1)
const data3=sliceArr.slice(2)
const data4=sliceArr.slice(2,4)
const data5=sliceArr.slice(-2)
const data6=sliceArr.slice(2,-1)

console.log(data2,"sliced array");
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);
console.log(sliceArr,"original Array");











