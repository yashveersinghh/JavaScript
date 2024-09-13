//1. the difference b/w var let ✅
//var old js
//var is function scoped => var apne parent function me kahi bhi use ho skta hai
//var adds itself in the window object

//let const new js
//let const is braces {} scoped => braces tk hi use hota hai
//let const doesnt adds (which is good for data privacy)

//2. Window object✅
/*js me kuchh chize hum nhi use kar skte h and woh chize hume browser se milengi
sare functions jo js ka part nhi h but still we can use them from a particular object jiska naam window h*/
/*whatever functions are there which js cannot do, which is done by the browser 
which stores different features in something known as WINDOW*/

//3. browser context API✅
//browser context API ke andar hi aata h window stack and heap memory

//4. stack => order jisme kaam pure honge✅

//5. heap memory => jitna bhi data and intermediate data program me hota h woh heap memory me store hota h✅

//6. execution context✅ matlab jab bhi ek function run hoga tab func apna khud ka ek imaginary container bana lega jisme 3 chiz honge
// 1) variables
// 2) functions inside that parent function
// 3) lexical environment of that function

//Execution context is a container where the function's code is executed and it is created whenever a function is called, it contains 3 things variables,functions and lexical environment

//7. lexical environment✅ hota h ek chart jisme ye likha hota h ki particular function kin chizo ko access kar skta h and kisko nhi,
// matlab ki it holds it's scope and scope chain

//8.how to copy reference values✅
/*SPREAD OPERATOR [...a]
var a = [1,2,3,4,5];
var b = [...a]; 
reference value copy ho jata h ... se means sirf value no reference
same for object {...a}*/

//9.TRUTHY and FALSY✅
// js me kuchh bhi likho wo do prakar ke hi honge and dono me se kisi ek ko hi belong karenge
//falsy value= 0, false, undefined, null, NaN, document.all
//truthy valuec(rest)
// conditionals me true ya false ke kaam aata h

//10. forEach loop✅
// forEach loop sirf array me kaam karta h 
// forEach loop kabhi bhi main default array me changes nhi karta h bus usske temporary copy  me change karta h
// var a = [1,2,3,4,5];
// a.forEach(function(val){
//     console.log(val + 2);
// })

//forIn loop✅
// objects pe loop karne ke liye hota h forIn loop
// var obj{
//     name = "yashveer",
//     age = 20,
//     city = "hazaribagh"
// }

// for(var key in obj){
//     console.log(key, obj[key])
// }
// //do while✅
// do{

// }
// while()
  
//11. callback functions✅
/*aisa code jo baad me chalta h use hum ek function de dete h jab bhi complete ho
jaye to yeh function chalta h, aur wo function ek normal function hi hota h and we call it callback function*/

//12. first class functions✅
//js me ek concept h you can use a function as a value
// var a = function(){};

// function abcd(a){
//    a()
//}

//abcd(function(){console.log("hey");})

//13. how arrays are made behind the scenes✅
// arr = [1,2,3,4];
// arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }
// Array.isArray([])
//true
//Array.isArray({})
//false

//14. how to delete object properties✅
// var a = {
//     name: "yash",
//     age: 20
// }

// delete a.age;