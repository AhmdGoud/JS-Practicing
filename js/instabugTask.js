// 1- //
function funck(){
    var par = []
    for (var i=0; i< 10; i++){
        par[i] = function(){
            return i;
        }
    }
    return par; // array of functions
}
var par = funck();
par[5](); // result is 10 cause i declared with var


// 2- //
let instaObj = {
    bug :'instabug',
    funck: function(){
        let self = this;
        console.log(this.bug);
        console.log(self.bug);

        (function(){ // this is anonumous function
            console.log(this.bug); // this here point to the global scope
            console.log(self.bug); 
        })()
    }
}
instaObj.funck()


// 3- //
import mycounter from './instabugTask.js'
import {plus} from './instabugTask.js'
// mycounter++ // this will log error cause Modules are READ ONLY
plus()
console.log(mycounter)

let counter = 1;
export default counter;
export function plus(){
    counter++
}


// 4- //
const obj = {1: 'a', 2: 'b'};
const set = new Set([1, 2, 3, 4])
// objects stores it's valus as string even if they declared as integers
obj.hasOwnProperty('1')
obj.hasOwnProperty(1) // here it will convert 1 to string and compare it
// set stores it's vaules with it's type
set.has('1')
set.has(1)
// result = true, true, false, true


// 5- //
let objck = {
    name: 'ahmed',
    token: 'gouda',
    nwitht(){
        return this.name + this.token;
    }
}

let namewithtoken = objck.nwitht; // it wasn't called ()

console.log(namewithtoken) // prints function reference
console.log(namewithtoken()) // undefined cause this in the funck here when it called return to the global obj
console.log(objck.nwitht()) // ahmedgouda