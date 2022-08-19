//for of loop
// doesnt wirk with objects
// doesnt ignore empty elements
// break statements is not supported

let arr=["nd",12234,22,"tumkur"," ", ,54]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//for of loop
// doesnt wirk with objects
// doesnt ignore empty elements
// break statements is not supported
for(let i of arr){
    console.log(i);
    
}


let stud=["avi","akshata","namana","nuthana","prajwal","vaibhav","himagirish",
];
for (let i of stud){
    console.log(i);
};

let fruits=["apple","mango","strawberry","kiwi","litchi"];
// fruits=["20"]="papaya";
console.log(fruits);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

let pens=[
    { brand: "parker",
      color: "black",
      price:500,
      type:"fountain pen"
    },
{
    brand:"reynolds",
    color:"pink",
    price:3,
    type:"ball",

},
{
    brand:"cello",
    color:"blue",
    price:5,
    type:"ball"
},
{
    brand:"bright",
    color:"red",
    price:10,
    type:"ball"
}

];

// for(let i=0;i<pens.length;i++){
//     if(pens[i].price>5)
//     console.log(pens[i]);
    
// }

// for(let i of pens){
//     if(i.price<5)
//     console.log(i);
// }


for(let i of pens){
    if(i.price>5  && i.type=="ball")
    console.log(i);
    
}

let person={
    firstName:"Himagirish",
    lastName:"ND",
    gender:"M",
    phNum:87418487783
};

for(let key in person){
    console.log(`${key}-${person[key]}`);
}

for(let value in pens)
if(pens[value].price>5  && pens[value].type=="ball")
console.log(pens[value])

for(let value in arr){
    console.log("this is for in lopp",arr[value]);//empty spaces will be ignoreed
}

