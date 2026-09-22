console.log("Hello World");
var a = 100;
a = "Test";
console.log(a);

b=200;
b="Another Test";
console.log(b);

//ES6
let c =300;
c="Yet Another Test";
//let c = 400;
console.log(c);

let d;
d= 5000

const x = 600;
//x= "TEST"
console.log(x);

//const x = 700;

console.log(x);

function testLetConst(){
    const x= 700;
    let c = 400;

    console.log('In block c:${c}');

}

testLetConst();
 console.log(`Out block c: ${c}`);
   
var flag = false
console.log(typeof a)
console.log(typeof b)
console.log(typeof flag)
console.log(typeof testLetConst)

let sayHello= function(){
    console.log("Hello world! Again");
}
sayHello();
let greet = () => {
    
    console.log("Hello world! Again using arrow function");
}
greet();

//array handling
let arr = [1,"Two",3,4,"Five",null,false,undefined, {},[]];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
var name 
console.log(name);
console.log(typeof name);

let obj = null
console.log(obj);
console.log(typeof obj);

let city={}
console.log(city);
console.log(typeof city);

//map
let numbers = [1,2,3,4,5];
console.log(numbers);
let newNumbers = numbers.map((num) => num*2)
console.log(newNumbers);
//filter
let evenNumbers = numbers.filter((n)=> n%2===0)
console.log(evenNumbers);
//reduce
let sum = numbers.reduce((acumulator,currentValue) => acumulator+currentValue)
console.log(sum);

//forEach
const outNumbers = numbers.map((num) => num*2)
.filter((n)=> n>2)
//.forEach((num) => console.log(num));
console.log(outNumbers);