// 1- find smallest number in an array
let ari1 = [55, 34, 56, 27, 78, 11]
let smallest;
function test() {
    smallest = ari1[0] // should initialized outside the loop so it don't reset it to 55 on every iteration
    for (i=0; i<ari1.length; i++){
    if (ari1[i] < smallest){
        smallest = ari1[i]
        }
    }
    return smallest
}
test() // we called the function to update the value of smallest
console.log(smallest) 

// 2- remove odd elements from array
let ari2 = [55, 34, 56, 27, 78, 11]
let newari2 = ari2.filter(function(ele){
   return (ele % 2) === 0;
})
console.log(newari2)

// 3- flash card 
function createFlashCard(question, answer) {
    return{ // returns object
        the_question: question, // property equal the parameter
        the_answer: answer // property equal the parameter
    }
}
let card = createFlashCard('what is Q', 'here is the A')
card.full_result = 'this is called object'
console.log(card.full_result)

// 4- swapping digits
let num = 42; 
let thenum = num.toString().split('').reverse().join('')
console.log(thenum) // = 24

// 5- remove special characters form text
let str = '$He&llo22#World@'
let result = []
let ari = str.split('')
for (i=0; i<ari.length; i++){
    if (
        ari[i] >= 'A' && ari[i] <= 'Z' ||
        ari[i] >= 'a' && ari[i] <= 'z' ||
        ari[i] >= '0' && ari[i] <= '9'
    ){
        result.push(ari[i])
    }
    result.join('')
}
let final_result = result.reduce(function(pre, current){
    return pre + current;
})
console.log(final_result)

// 6- check if text in alphapetical order
let str2 = 'abcdef'
let str3 = 'htcadb'
function alphaorder(text){
    if (text === text.split('').sort().join('')){
        return 'ordered'
    } else{
        return 'not order'
    }
}
console.log(alphaorder(str2), alphaorder(str3))

// 7- rest parameter ...numbers ...strings
function countParameters(...args) {
    return args.reduce(function(num1, num2){
        return num1 + num2
    })
}
console.log(countParameters(2, 4 ,5 ,5 ,8 , 9)) 

function countParameters(name, title, ...hobbies) {
    return `i am ${name}, my job is ${title} and hobbies are ${hobbies.join(', ')}`
}
console.log(countParameters('Gouda Codes', 'web dev', 'coding', 'tech', 'learn new staff'))

// 8- interval between largest number and smallest one

let s = arr_for_interv[0] 
let l = arr_for_interv[0]
function interval(){
    arr_for_interv.forEach((ele)=>{
        if (ele < s){
            s = ele;
        }
        else if (ele > l){
            l = ele;
        }
    })
    console.log(l-s)
}
interval()
// another way
let arr_for_interv = [ 72, 4 , 2 , 6 , 18 , 24, 32]
let ss = Math.min(...arr_for_interv)
let ll = Math.max(...arr_for_interv)
console.log(ll-ss)

// 9- generate stars **
function generateStarRating(rating) {
    let star = '*';
    star= star.repeat(rating)
    console.log(star)
}
generateStarRating(5)

// 10- mountain array
let arii = [2, 5, 7, 9, 6, 4, 1]
function isMountainArray(arr) {
    // 1. First check: arrays shorter than 3 elements can't be mountains
    if (arr.length < 3) return false;
    
    let i = 0;             // Start our pointer at the beginning
    const n = arr.length;  // Store the array length for efficiency
    
    // 2. Walk up the increasing slope
    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;  // Move pointer right while numbers are increasing
    }
    
    // 3. Check if peak is valid (can't be first or last element)
    if (i === 0 || i === n - 1) {
        return false;  // No increasing or decreasing part exists
    }
    
    // 4. Walk down the decreasing slope
    while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;  // Move pointer right while numbers are decreasing
    }
    
    // 5. If we reached the end, it's a valid mountain
    return i === n - 1;
}
console.log(isMountainArray(arii))

// 11- function return first 2 or 1 even numbers from array, and if it's 0 return empty
function even(...nums){
    let arii = []
    for (i=0; i< nums.length; i++){
        if (nums[i] %2 === 0){
            arii.push(nums[i])
            if (arii.length === 2){
                break;
            }
        }
    }
    if (arii.length >=1 ){
        return arii
    } else {
        return `empty array`
    }
}
console.log(even(5,221,7,81,41,1,121))

// 12- sum odd numbers starting by the taking number till one, under one should return false
function oddnum(num){
    let ari = [];
    for ( ; num >= 1 ; num-- ){
        if(num%2 !== 0){
            ari.push(num)
        }
    }
    return ari.reduce(function(pre, current){
        return pre + current
    })
}
console.log(oddnum(7))

// 13- function return slcie from string as per the arguments
function slice(str, start, end){
    let result;
    if (start === ''){
        if (end === ''){
            result = str;
        } else {
            result = str.slice( '', end )
        }
    } else {
        if (end === ''){
            result = str.slice(start)
        } else {
            result = str.slice( start , end )
        }
    }
    return result
}
console.log(slice('ahmed gouda', 2, 8))

// 14- conpare 2 objects
let ob1 = {
    user: 'ahmed gouda',
    age:28
}
let ob2 = {
    user: 'ahmed gouda',
    age:28
}
function compare(obj1, obj2){
    keys1 = Object.keys(obj1)
    keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length){
        return false
    }
    let result1, result2;
    for (key in ob1){
        result1 = ob1[key]
    }
    for (key in ob2){
        result2 = ob2[key]
    }
    if (result1 !== result2){
        return false
    } else{
        return true
    }
}
console.log(compare(ob1, ob2))

// 15- return the index of str if it's part of the full string
function index(str, instr){
    for(i=0; i< str.length; i++){
        if (str[i] === instr[0]){
            if (instr.length > 1){
                let sliced = str.slice(i, instr.length)
                if (sliced === instr){
                    return i
                } else{
                    return -1
                }
            } else{
                return i
            }
        }  
    }
    return -1 // we wrote it outside the loop cause it will return -1 if first char dosen't match
}
console.log(index('ahme gouda', 'gou'))
// let user = 'ahmed'
// console.log(user.includes('me'))


// 16- alphabitcal sum numbers
function scrabblePoints(word) {
    const points = {
        'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4,
        'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3,
        'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8,
        'y': 4, 'z': 10
    };
    let total = 0;
    for (let letter of word.toLowerCase()) {
        total += points[letter] || 0 ; // Add the letter's points, or 0 if not found
        // points[letter] => returns the value for the letter in object
    }
    return total;
}
console.log(scrabblePoints('word'))


// 17- loves me if even or odd
function loves_me(n){
    let result = [];
    for (i=1; i<=n; i++){
        let phrase;
        if (i % 2 !== 0){
            phrase = 'loves me'
            if (i === n){
                phrase = phrase.toUpperCase()
            }
        }else{
            phrase = 'love me not'
            if (i === n){
                phrase = phrase.toUpperCase()
            }
        }
        result.push(phrase)
    }
    return result.join()
}
console.log(loves_me(3))


// 18- array.every 
let locations = {
    10: 'one',
    20: 'two',
    30: 'tri',
    40: 'for'
}
let thelocation = 55;
let obj = Object.keys(locations) // return keys
let objct = Object.values(locations) // return values
// 1 using foreach to return numbers and first way function
let arrii = [];
obj.forEach(ele =>{
    arrii.push(+ele)
})
function checklocation(ob){
    return ob.every(function(e){
        return e > this
    }, thelocation)
}
console.log(checklocation(obj))
// 2 using map method and seconed way function
let objnumbers = obj.map(ele =>{
    return +ele
})
let checkobj = objnumbers.every(function(e){
    return e > this
}, thelocation)
// --------- //


// 19- the most plaed hashtags 
let hashtags = document.querySelectorAll('.hashtags div')
let twitter = document.querySelector('.twitter')
let insta = document.querySelector('.insta')
let facebook = document.querySelector('.facebook')
let tele = document.querySelector('.tele')
let reddit = document.querySelector('.reddit')

let ob_ar = []
let ob = {}
let counter = 1;
hashtags.forEach(ele =>{
    ele.addEventListener('click', function(e){ 
        if (e.target.classList in ob){
            ob[`${e.target.className}`] = ob[`${e.target.className}`] + 1
        }else{
            ob[`${e.target.className}`] = counter 
        }
        ob_ar = Object.values(ob)
        ob_ar.sort((a,b) => b-a)
    })
})

function hashs(num){
    for(i=0; i<=num ; i++){
        let key = (Object.keys(ob).find(key => ob[key] === ob_ar[i]))
        console.log(key)
    }
}
let btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    hashs(1)
})


// 20- count how many time ele appeared in arr and add it as value for ob
let ar = ['a', 'b', 'a', 'c', 'a', 'b']
function frequencyDistribution(ar) {
    let ob = {}
    ar.forEach(ele => {
        ob[ele] = (ob[ele] || 0) +1 ;
    });
    return ob
}
console.log(frequencyDistribution(ar))



// ---------- DOM and BOM ----------- //
// ---------------------------------- //

// 1- change image when click right or left
let main_image = document.querySelector('.main-image')
let all_images = document.querySelectorAll('.all-images img')
let btn_right = document.querySelector('.rigth')
let btn_left = document.querySelector('.left')
let image_index = 0; // instead of using for loop we intialize an index outside and use it to reach point
// to the right
btn_right.addEventListener('click', function(){
    if (image_index > all_images.length -1){
        image_index = 0;
    }
    main_image.src = all_images[image_index].src
    image_index++
})
// to the left
btn_left.addEventListener('click', function(){
    image_index--
    if (image_index < 0){
        image_index = all_images.length -1;
    }
    main_image.src = all_images[image_index].src
})


// 2- change background-color in the main item when clicked to another one
let all_divs = document.querySelectorAll('.all div')
let button = document.getElementsByTagName('button')[0]
for (i=0; i<all.length; i++){
    all_divs[i].addEventListener('click', function(e){
        // we use [window.getComputedStyle] if styles made in [CSS File not in HTML attribures] 
        const bgColor = window.getComputedStyle(e.target).backgroundColor;
        btn.style.backgroundColor = bgColor;
    })
}
// another way if it HTML
for (i=0; i<all.length; i++){
    //let color = all[i].style.backgroundColor 
    all[i].addEventListener('click', function(e){
        // this work if style inlined in HTML element
        btn.style.backgroundColor = e.target.style.backgroundColor
    })
}
// to add it to localStorage 
let all = document.querySelectorAll('.all div')
let btn_ = document.getElementsByTagName('button')[0]
for (i=0; i<all.length; i++){
    all[i].addEventListener('click', function(e){
        let bg_color = window.getComputedStyle(e.target).backgroundColor
        window.localStorage.setItem('background-color', bg_color)
        // we still need to leave the 2 comming lines to add the color on click
        let wl_color = window.localStorage.getItem('background-color')
        btn.style.backgroundColor = wl_color
        console.log(bg_color, wl_color) // this work if style inlined in HTML element
    })
}
// to make the event load with the page
document.addEventListener('DOMContentLoaded', function(){
    let wl_color = window.localStorage.getItem('background-color')
    btn.style.backgroundColor = wl_color
})


// 3- change main image when click
let main_img = document.querySelector('.main-image')
let all_imgs = document.querySelectorAll('.all-images img')
all_imgs.forEach(ele =>{
    ele.addEventListener('click', function(e){
        main_img.setAttribute('src', e.target.src)
    })
})


// 4- Generate Quotes
let p = document.querySelector('p')
let h3 = document.querySelector('h3')
let btn_quote = document.querySelector('button')
let obb = [
    {
        quote: '“1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, asperiores.”',
        person: '1 the person'
    },
    {
        quote: '“Be yourself; everyone else is already taken.”',
        person: '2 the person'

    },
    {
        quote: '“So many books, so little time.”',
        person: '3 the person'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        person: '4 the person'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        person: '5 the person'
    }
]
let obindex = 1; // we started at 1 so it loop on the first quote which we already add to the {ob}
btn_quote.addEventListener('click', function(){
    if (obindex > obb.length -1){
        obindex = 0;
    }
    p.innerText = obb[obindex].quote
    h3.innerText = obb[obindex].person
    obindex++
})
// another way without using ( if )  
btn.addEventListener('click', function(){
    p.innerText = ob[obindex].quote
    h3.innerText = ob[obindex].person
    obindex = (obindex + 1) % ob.length; // using modeuls 
})


// 5- change background-image in Css and make it active
let container = document.querySelector('.container')
let images = document.querySelectorAll('.container img')
images.forEach(ele => {
    ele.addEventListener('click', function(e){
        container.style.backgroundImage = `url('${e.target.src}')`
        images.forEach(img =>{
            img.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})


// 6- plaindrome cheker
let input_ = document.querySelector('[type="text"]')
let btnn = document.querySelector('button')
let resultt = document.querySelector('.result')

btnn.addEventListener('click', function(){
    let reversed_value = input.value.split('').reverse().join('')
    if (input.value === reversed_value){
        result.innerHTML = `cong, it's a plaindrome`
    } else{
        resultt.innerHTML = `sorry, it's NOT a plaindrome`
    }
    input.onfocus = function(){
        resultt.innerHTML = ""
        input.value = ""
    } 
})


// 7- slider with the height of the page
let scroler = document.querySelector('.scroller')
// the whole page height - the part on the screen
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
// document.documentElement == <html> element
window.addEventListener('scroll', function(){
    scroler.style.width = `${( this.document.documentElement.scrollTop/ height) * 100}%`
})


// 8- animated scroller to exact number on loading
let scroller = document.querySelector('.in-scroll')
window.addEventListener('load', function(){
    let index = 1;
    function width (){
        if (index <= 232){
        scroller.style.width = `${index}px`
        scroller.innerHTML = `${parseInt((index/ 300) *100)}%`
        index++
        }
    }
    this.setInterval(width, 1) // 
})


// 9- animated counter with the pade loading
let numbers = document.querySelector('.numbers')
window.addEventListener('load', function(){
    let counter = 0;
    function count(){
        if (counter <=78){
            numbers.innerHTML = counter
            counter++
        }
    }
    this.setInterval(count, 10) // 
})


// 10- Rating Stars
let icon = document.querySelectorAll('ion-icon')
let rating = document.querySelector('p')
let aricon = Array.from(icon)
aricon.forEach(ele =>{
    ele.addEventListener('click', function(e){
        let index = aricon.indexOf(e.target)
        rating.innerHTML = `Rating is: ${index+1}/5`
        for (i = index; i >= 0; i--){
            aricon[i].style.color = 'yellow'
            if(index === 4){
                aricon[i].style.color = 'green'
            }
        }
    })
})


// 11- Multiply Quiz APP
let score = document.querySelector('.score')
let input = document.querySelector('input')
let bt = document.querySelector('.btn')
let question = document.querySelector('.question')

let num1 = Math.floor(Math.random() *9)
let num2 = Math.floor(Math.random() *9)
question.textContent = `what is ${num1} multiply by ${num2}?`

let i = 0;
bt.addEventListener('click', function(){
    if (parseInt(input.value) === num1*num2){
        i++
        score.textContent = `ur score is: ${i}`
    }
    num1 = Math.floor(Math.random() *9)
    num2 = Math.floor(Math.random() *9)
    question.textContent = `what is ${num1} multiply by ${num2}?`
    input.value = ''
    input.focus()
})

// idea of closures
function addTo(num1){
    return function(num2){
        console.log(num1 + num2)
    }
}
const addToThree = addTo(3)
const addToOne = addTo(1)

addToThree(1) // = 4
addToOne(5) // = 6

// ------------ Challenges Not Solved Yet ------------ // 
// 1 arr => 3 objects => every object has 1 proerty = arr which have 3 objects
let arr = [ // arr = [{ [] }, { [ ] }, { [ ] }]
    {
        ahmed:[{sat: true},{sun: true}, {mon: false}]
    },
    {
        mahrous:[{sat: true},{sun: false},{mon: true}]
    },
    {
        gouda:[{sat: true},{sun: false},{mon: false}]
    },
]
// -- //

let graph = [[0,10,15,20], [10,0,35,25], [15,35,0,30], [20,25,30,0]] // tsp travel fewest price
function tsp(graph) {
    
}
tsp(graph)
// ---- //



let board = [['x', 'o', ''], ['', 'x', 'o'], ['', '', '']] // [2, 2] // the move to win
function findWinningMove(board){
    
}
findWinningMove(board)
// ---------------- //

function generatePascalsTriangle(numRows) { // the outside alwayes 1
    let ar = []
    let i = 1;
    while (i >= numRows){
        ar.push(i)
        i++
    }
}
generatePascalsTriangle(5)
// ------------------------------------------------ //

// [1, 2, 3] => [2,3,1] [3,1,2]
function countDer(n) {
    let ar = []
    while (n > 0){
        ar.unshift(n)
        n--
    }
}
countDer(3)
// ----- //

// ABA, AU, LA
function numDecodings(num) {
    const alpha = []
    let i = 1;
    while (i <= 26){
        alpha.push(i)
        i++
    }
}
numDecodings(121)
// ----------- //