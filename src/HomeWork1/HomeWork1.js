//'2.- ***************************    Suma'
console.log('2.- ***************************    Suma')
const sumF = (p1, p2) => {
    if (p2 !== undefined) {
        console.log('  case 2, sumF(2, 3) :');
        return p1 + p2;
    } else {
        console.log('  caso 1, sum(2)(3)');
        return (p2) => { return p1 + p2; };
    }
}

console.log(sumF(2)(3));
console.log(sumF(2, 3));
console.log('  ');
//'3.- ***************************    setTimeout'
console.log('3.- ***************************    setTimeout')

console.log(" for (var i = 0; i < 5; i++) { setTimeout(function () { console.log(i); }, 100);")
/* for (var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },100);
   } */

console.log("");
console.log("can use  a closure around setTimeout");

 
for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },100);
   }
//can use  IIFE around setTimeout
console.log('ES5')
for (var i = 0; i < 5; i++){
    (function (i) { 
        setTimeout(function() {  console.log(i); },100);
    })(i);
}



//4.- ***************************    Remove duplicates     [0, 2, 2, 5, 5, 1, 3, 6, 3, 7, 7]
console.log('4.- ***************************    Remove duplicates     [0, 2, 2, 5, 5, 1, 3, 6, 3, 7, 7]')
const dupArray = [0, 2, 2, 5, 5, 1, 3, 6, 3, 7, 7];
const noDupSet = new Set(dupArray);
const noDupArray = Array.from(noDupSet);
console.log(dupArray);
console.log(noDupArray);
//5.- ***************************    like [1, [2, 3], [4, 5]]   flatten the array like: [1, 2, 3, 4, 5]
console.log('5.- ***************************    like [1, [2, 3], [4, 5]]   flatten the array like: [1, 2, 3, 4, 5]');
const myArray = [0, 3, 2, 2, 5, 7, 7, 1, 1];
const myArray2 = [1, [2, 3], [4, 5]];
console.log(myArray2);
console.log(myArray2.flat());



   