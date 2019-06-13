// data types starts
let message = "hello";

message = 123456;

console.log(message);


let number = 987654321;

number = 98.33255;
// data types ends
// Infinity
console.log( 1 / 0 ); // Infinity

console.log( 4 / 2);
console.log( "abc" / "xyz");


// Strings

let new_string = "Hello";

let another_String = `New String Copied ${new_string}`;

console.log(new_string);

console.log(another_String);


let even = true;
let odd = false;


let isGreater = 4 > 1;

console.log(isGreater);


let age = 15;

console.log(age);

age = null;

console.log(age);

let birthDate = undefined;

console.log(birthDate);

birthDate = 25;

console.log(birthDate);

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string





// Tonumbar

// console.log("6" / "2");

let str = "12345";
console.log(typeof str);


let nm = "1232";
console.log (typeof nm);

let num = Number(nm);
console.log(typeof num);



console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5 );
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log(" -9  " + 5 );
console.log(" -9  " - 5 );
console.log(null + 	1);
console.log(undefined + 1);



// string concatenation


let string_Concate = 'my' + ' ' + 'variables';

console.log(string_Concate);

let number_Concate = '1' + '2';

console.log(number_Concate);

number_Concate = 'abc' + 2;

console.log(number_Concate);


number_Concate = 2 + 2 + '1';
console.log(number_Concate);


let abc = 15;
console.log (abc++);
console.log (++abc);

// number conversion


let x = 1;
// console.log(++x);
console.log(x++);



let y = -2;
console.log(+y ); // -2


let counter = 2;
++counter;      
console.log( counter ); // 3


let counterr = 5;
counterr--;     
console.log( counterr); // 3


let apples = "2";
let oranges = "3";

console.log( apples + oranges );

console.log( +apples +  +oranges ); 

let addition_sub = 2 + (2 * 9);
console.log(addition_sub);