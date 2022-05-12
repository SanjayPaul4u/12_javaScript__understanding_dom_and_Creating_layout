console.log("This tutorial is for understanding dom and creating layout.");

let a = document;//main
// console.log("The document is : ",a);

// let type = typeof document;
// console.log("The type of document is: ",type);

// //----------------------------------

// let b  =  document.all;
// b = document.body;
// b = document. forms;
// b = document. forms[0];
// console.log(b);

// //----------------------------------------====
// a = document.all;
// Array.from(a).forEach(function(element){
//         console.log(element);
// })

// //----------------------------------------====
// a = document.links;
// a = document.links[0];
// a = document.links[0].href;
// console.log(a);

// //QUick QUize--------->use of document.images and document.scripts📌📌📌

a = document.scripts;
console.log(a);


//This for get all scripts
Array.from(document.scripts).forEach(function(e){
    console.log(e);
})
//This for get all images
Array.from(document.images).forEach(function(e){
    console.log(e);
})
