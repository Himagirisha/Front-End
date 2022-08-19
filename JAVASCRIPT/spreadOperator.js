//...magical dots





//rest operator


function add(...a){
    let sum=0;
    for(let i of a){
        sum=sum+i;
    }
    console.log(sum);
    return sum;
    
}

add(20,30);
add(10,2,3,4);
add(1,2,3,44,45,672,23,32,1);

let x=30;
let y=x+10;
console.log(y);
console.log(x);

//refrences type r copied by reference

let m={
    name: "avi",
    phno:82387912873,
    age:22
}

//...spread operator

let n={...m};
m.name="vaibhav";
n.age=25;
console.log(n);//avi
console.log(m);//vaibhav

let person={
    fname:"himagirisha",
    lname:"nd",
    moredetails:{
        bgroup:"o+",
        gender:"M"
    },
    dob:"dec 15"

}

let pcopy={...person};
person.fname="avi";

let deepCopy = { ...person, moreDetails: { ...person.moreDetails } };

person.moredetails.bgroup="b+"
console.log(person);
console.log(pcopy);

//deep copy will copy wll the levels of array of object
//new object will be created with new refrence

//JSON.parse():this will convert json to js object
//JSON.stringfy will conveert from object to JSON obejct
const pcopyJson=JSON.parse