/* for (var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },100);
   }

 */

/* for (let i = 0; i < 5; i++){
  (function(i) {
    setTimeout(function() {
      console.log(i)
    },100)
  })(i)
}
 */

//can use  a closure around setTimeout
/* 
for (var i = 0; i < 5; i++) {
    ((i) => {
        setTimeout(function () { console.log(i); }, 100);
    })(i);
}

 */

// closure
/* for (var i = 0; i < 5; i++) {
    setTimeout((function (i) {
        return function () {
            console.log(i);
        }
    }(i)), 1000)
}

for (var i = 0; i < 5; i++) {
    setTimeout(((n) => () => console.log(n))(i), 1000)
} */
/* for (var i = 0; i < 5; i++){
    setTimeout(function() {   console.log(i);
    },100);
   }
   
for (let i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () { console.log(i); }, 100);
    })(i);
} */


/* console.log('ES5')
for (var i = 0; i < 5; i++) {
    console.log(i);
    setTimeout(function () {  }, 100);
}
 */
for (var i = 0; i < 5; i++){
    (function (i) { 
        setTimeout(function() {  console.log(i); },100);
    })(i);
}
   
