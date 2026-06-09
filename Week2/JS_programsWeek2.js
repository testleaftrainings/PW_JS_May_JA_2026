
// let sentence = "Automation testing is incredibly important"; //index = 0,1,2,3,4
//                                                             // length = 1,2,3,4,5

// let words = sentence.split(" ")
// let longest=[]

// console.log(words);

// for (let index = 0; index < words.length; index++) {

//   //  console.log(words[index.length]);

//     if (words[index].length>longest.length) { // 9>0 true
//         longest = words[index]
//     }    /* longest = "Automation" */ 
// }

// console.log(longest);


// //array of strings
// const names = ["Arun","Chandru","Bala"]
// console.log(names.sort()) // [ 'Arun', 'Bala', 'Chandru' ]

// //array of object
// const details = [{"Arun":20},{"Chandru":30},{"Bala":33}]
// console.log(details.sort().localeCompare())

// //array of numbers
// let numberArray = [10, 8, 9, 7];
// //console.log(numberArray.sort()) // [ 10, 7, 8, 9 ]


// console.log(numberArray.sort((a,b)=>a-b)) // ascending

// console.log(numberArray.sort((a,b)=>b-a)); // descending




//function expression => Hoisting takes place but returns error
 // x holds no value/ no


const x = function () {
    console.log("Welcome")
}
x()


