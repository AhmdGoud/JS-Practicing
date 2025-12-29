// Map, Filter, Reduce Fuctions

// 1- Map //
// it is an array method which returns a new one
// it accepts to parameters (callback Function, this argument)
// the callback function accepts three parameters (element, index, array)

// 1- with an anonumousfunction
const arr1 = [1, 2, 3]
const mapArr = arr1.map(function(ele, i, arr){
    // ele is a must
    // i and arr are optional
    // u can access i even if u didn't add it in the parameters (how)
    console.log(ele, i, arr)
    console.log(this)
    return ele + ele
    // return ele + this // we can pass this as any value (num, str, arr, obj)
}, ) // this refers to the value enetered, if not refers to the global object window
console.log(mapArr) // [2, 4, 6]

// 2- with an arrow function
const mapArrow = arr1.map((ele) => ele + ele)
console.log(mapArrow) // same result

// 3- with a named function
function add(ele){
    return ele + ele
}
const mapFunck = arr1.map(add)
console.log(mapFunck) // same result
// this equal to ====
// const mapFunck = []
// for (ele of arr1){
//     mapFunck.push(ele + ele)
// }
// console.log(mapFunck) // same result [2, 4, 6]

// 4- using this argument
const obj1 = {adder: 10}
const mapObj = arr1.map(function(ele){
    return ele + this.adder // we added this here to till JS look at this object for adder, else
    // it will try to find a variable called adder in:
    // Local function scope
    // Parent scopes
    // Global scope
    // It do NOT check inside obj1, Till we write this.
}, obj1)
console.log(mapObj) // [11, 12, 13]


// --------- //
// 2- filter //
// same like map, but it's work to do a condition which return boolean
// if true returned this ele will be added to the new arr, if false the ele won't be added
const arrFiltered = arr1.filter(function(ele){
    return ele > 1;
    // if we did condition like ele + ele, it won't concat them instead it will return the same ele
})
console.log(arrFiltered) // [2, 3]


// --------- //
// 3- reduce //
// is a litle different
// it don't return a new array, instead it results in a single output value
// it accpets a callback function and intial value => reduce(callback, initial)
// the callback function accepts 4 parameters (accumulator, current value, index, array)
// accumulator is the previous val we have, it's always the first ele else if an initial value is provided
const arrReduced = arr1.reduce(function(acc, curr){
    return acc + curr;
})
console.log(arrReduced) // 6