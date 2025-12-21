    //--------------------- BOM ----------------------//
    // BOM - browser object model == the window objetc// 

// 1- setTimeout(function, timeout, additional parameters or the arguments values)
function print (thename){
    console.log(`this text is from the ${thename} line`)
}
let handler = setTimeout(print, 3000, "6th line coding")
clearTimeout(handler);
// to stop it we use clearTimeout()
// clearTimeout(here is the handler of the setTimeout ; handler means the variable)

setTimeout(function(){
    console.log("new timewout")
}, 5000) // another way to set time

setTimeout (function(para){
    alert(`anonymous function ${para}`)
}, 3000, "from window")

// 2- setInterval() same as setTimeout except it excutes the code more than one time as the time given
// to stop it we use clearInterval()
let div = document.createElement("div")
divtext = document.createTextNode("5")
div.appendChild(divtext)
document.body.append(div)
function counter(){
    div.innerHTML -= 1;
    if (div.innerHTML === "0"){
    clearInterval(count)
    }
}
let count = setInterval(counter, 1000);

// 3- scroll 
// window.scroll(x, y || or use options)
window.scrollTo(200, 500)
window.scrollBy({
    left: 200,
    top: 500,
    behavior: "smooth"
})
// scroll to top page
let btn = document.createElement("button")
let btntext = document.createTextNode("to up")
btn.appendChild(btntext)
document.body.append(btn)
window.onscroll = function(){
    if (window.scrollY >= 500){
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}
btn.onclick = function(){
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth"
    })
}

// 4- local storage
btn = document.getElementsByTagName("button")[0]
window.localStorage.setItem('color', 'red') // first way to set item
window.localStorage.color = 'red' // seconed way to set item
window.localStorage['color'] = 'red' // third way to set item
btn.style.backgroundColor = window.localStorage.getItem('color'); // same at get as set

///////
    //------------------- DOM --------------------//
    // ---------- document object model --------- //

// 1- Get and Set Attributes
let tri = document.getElementById("tri")
tri.setAttribute("class", "new tri") // name of attr EX class, href or id .. , then the value, it may be link
console.log(tri.getAttribute("class") === "new tri")

// 2- Events 
document.onclick = function(){
    console.log(window.scrollY)
}
// another way to create event
function roll(){
    console.log(window.scrollY)
}
window.scroll = roll()

// event simulation
window.onload = function(){
    innput.focus()
}

// event listener
window.addEventListener("keydown", function(e){ // (e) refers to event will be excuted on
    console.log(e.code) // e.code print the key clicked
})
// another way to do it
window.onkeydown = (e)=>{
    console.log(e.code)
}
// to jump after press space
window.addEventListener("keydown", function(e){
    if (e.code === "Space"){
    }
})
// to prevent event from working
btn.onclick = (e)=>{
    e.preventDefault()
}
// form validation 
let btn = document.getElementsByTagName("button")[0]
let name1 = document.querySelector("[name='name1']")
btn.onclick = (e)=>{
    if (name1.value === "" || name1.value.length <= 10){
        e.preventDefault()
    }
}
// or this way
btn.onclick = (e)=>{
    let user;
    let pass;
    if (name1.value === "" || name1.value.length <= 10){
        user = false;
        pass = false;
    } else{
        user = true;
        pass = true;
    }
    if (user === false || pass === false){
        e.preventDefault()
    }
}
// OTP verfication code
let form = document.getElementsByTagName("form")[0]
form.oninput = ()=>{
    for (i=0; i<form.length; i++){
    if (form[i].value.length >= '1'){
        form[i].nextElementSibling.focus()
        }
    }
}

//////
    // ----- Objects ----- //
    //---------------------//----------------------//

let user = { // 1- objects consists of { properties and methodes - each one is about key: value}
    firstname: 'ahmed', 
    lastname: 'gouda',
    age: 28, // this is properity => key not a variable

    fullname: function(){ // this is method => key: value,
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(user.fullname())
user.age = 32 // to edit and if age wasn't already exist it will be added
// in other way
function print(theuser){
    return `${theuser.firstname} ${theuser.lastname}`
}
console.log(print(user)) // we passed the user object as an argument for theuser parameter

// 2- nested objects
let user = {
    ahmed: {
        age:28,
        degree: 'high-school'
    }
}

let ob = {
    user:'ahmed',
    age:29,
    title:'web',
    'name': 'gouda'
}
console.log(ob.user) // dot notation just work for identifires
console.log(ob['name']) // bracket notation work for any type


//////
    // ----- functions ----- //
    //-----------------------//-----------------------//

function saihi(user){ // user is the parameter which works as a variable
    return `hello ${user}` // function consists of header and body
}
console.log(saihi('bro')) // bro is the argument which passed as variable value

// 1- function has it's private scope not like block scope
let a;
function test(){
   a = 22
}
console.log(a) // x won't be printed cause it's function scope not a block one

let b;
if (true){
    b = 33
}
console.log(b) // a will be printed cause we intialized it outside the block

// 2- function as a value for a variable
function test(){
    return 22;
}
let x = test()
console.log(x)
console.log(`${x} is a number `) // usual function stored as a value

function test1(){
    console.log(33);
}
let xx = test1 // we remove () so function will be stored in variable xx as method
xx() // here we called variable xx as a method

function test2(){
    console.log(44)
}
let xxx = test2() // will print the value in console but won't store it
console.log(xxx) // undefined

let test4 = function (){
    console.log('hi from test4')
}
test4() // we stored function at the variable then we called it
// when we store function in a var it's useful so we can excute some methods on this var as string does
console.log(test4.length) // length referes to number of parameters

// 3- function as an argument for a parameter
function num1 (){
    return `from num1`;
}
function num2 (x,t){
    console.log(`this msg ${x} at ${t} pm`)
}
num2(num1(), 12)

// 4- higher order functions
let arr = [10 , 20 , 30 , 40, 50]
let arri = arr.map(function(element){
    return element*10 ;
})
console.log(arri)

let arrii = arr.filter((ele)=>{
    return ele > 35
})
console.log(arrii)

let ari = arr.reduce(function(pre , current){ // just reduce takes 2 para
    return pre + current
})
console.log(ari)


function test (){
    return function(num1 , num2 ){
        let result = num1 + num2 
        return result;
    }
    
}
console.log(test(2,3)) // test don't have parameters so arguments are ignored and it returned function
let final = test() // here test return inner funck 
console.log(final(2,3)) // then we call it with the arguments for the inner funck


function addTo(num1){
    console.log(num1)
    return function(num2){
        console.log(num1 + num2)
    }
}
const addToThree = addTo(3) // it will log the num1 only immiditatly cause it's already called
const addToOne = addTo(1) // but it will store the inner function in the var till invoke the var as a funck
console.log(addToThree) // 
addToThree(1) // = 4
addToOne(5) // = 6


// ---------------------------------------- //
// ------------ General Notes ------------- //

// 1- algorithms depends on => cpu and ram == memory and processor == time and space
// 2- programming consists of => data and functions == properties and methods

// 3- to sort as per length by using sort function
let ordering = hashtags.sort((a, b) => b.length - a.length) 

// 4- check object keys
console.log(Object.keys(ob1).length === Object.keys(ob2).length) // object.keys return array

// 5- getElementsByClassName('all')[0] returns a single element, not a collection, so you can't use .length on it

// Create an Array position values
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[0]:fruit1 ,[3]:fruit2} = fruits; // we can destructe by index
console.log(fruit1, fruit2)

// Create an Array rest proerty
const numbers = [10, 20, 30, 40, 50, 60, 70];
// Destructuring
const [c,d, ...rest] = numbers // using the ...rest parameter like ...spread
console.log([c, d, ...rest])

// setInterval returns {a Unique ID} beside the logging output which we use to stop it by assining it
// to clearInterval method , or we assign the setInterval to a variable and assign the var to the clear

let data = {name: 'ahmed', age:25}
console.log(data == {name: 'ahmed', age:25}) // {false} as JS compares objects by references as objects are not
// primitev data types , but if the data are primitev then JS compares it's values 



//-----------------------------------//
seats = [[220, 25], [30, 35], [40, 45]]
function concertSeats(seats) {
    let col1 = [];
    let col2 = [];
    for (i=0; i<seats.length; i++){
        col1.push(seats[i][0])
        col2.push(seats[i][1])
    }
    console.log(col1, col2)
    if (col1 === col1.sort((a, b) => a-b) && col2 === col2.sort((a, b) => a-b)){ // sort modife the ari in place 
        console.log('sorted') // so this will be true cause they two point to same object ref in memory
    }else{ // so we can use a var with spread syntax like col11 = [...col1].sort()
        console.log('not sorted') //  sort() converts elements to strings by default
    }
    console.log(col1, col2)
    return;
}
concertSeats(seats) // here the funck is called so it will excute the code normaly
console.log(concertSeats(seats)) // here it's calles with console so it will log the return value which is undefined
