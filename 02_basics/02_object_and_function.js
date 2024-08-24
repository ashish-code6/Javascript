const obj1={
    "a":1,
    "b":2,
    c:3
}
// console.log(obj1);
// console.log(obj1.keys());---aise object ko define nahi kar saktye
// console.log(Object.keys(obj1));
// console.log(this.obj1("a"));

let arr={};
// arr=Object.keys(obj1);

// console.log(arr);
// console.log(Object.keys(arr));

// arr=Object.values(obj1);
// console.log(arr);


/* Concantet two object */

let obj2={
    name:"ashish",
    email:"ashish@google.com",
    mob:"2241785964",
};
// const obj3={...obj1,...obj2};----"Spread" operator help to concanate two object.
// console.log(obj3);

// ***************************************************************
function person(){
    console.log("write code");
    console.log("eat food ");
    console.log("sleep well");
}
// person();
let num3=0;
function add(num1,num2){
    num3=num1+num2;
    return;
}
add(4,3);
// console.log(num3);

// if we declare const keyword glovbally then can't access the keyword within function, its value not change.


 const arrow=()=>{
    console.log("write code");
    console.log("eat food ");
    console.log("sleep well");
    
}
// console.log(arrow());

// const employee={
//     name: "xyz",
//     id:"abc123",

//     bio: function(){
//         return this.name;
//     },
//     net:()=>{
//         return this.id;
//     },
// };
// console.log(employee.bio());
// console.log(employee.net());

// ------ this keyword are not use inside the arraow function but as a general function u can use.

const function1=()=>{
    this.value=100;
   const function2=()=>{
        // console.log(this.value);-------lexical bound
    };
    function2();
};
function1();

