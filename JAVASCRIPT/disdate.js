const dispdate=new Date();
console.log(dispdate);
console.log(dispdate.getDate());
console.log(dispdate.getHours());
console.log(dispdate.getTime());
console.log(dispdate.getMinutes());

const dateString= new Date("dec/21/2021")
console.log(dateString);
console.log(dateString.getDay());


const date1=new Date("dec/22/2021");

let month=date1.getMonth();
console.log(month);
let dateValue=date1.getDate();
console.log(dateValue);
let year=date1.getFullYear();
console.log(year);

const fullYear=`${month+1}/${dateValue}/${year}`;
console.log(fullYear);


let date2=dispdate.toLocaleDateString("en-in",{
    weekday:"long",
    month:"long",
    year:"numeric",
    day:"2-digit"


});
console.log(date2);


let person=["nd",90,"15/12/2000"]
for(let i=0;i<person.length;i++){
    console.log(person[i]);
    
}

