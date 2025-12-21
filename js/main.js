// function test(){
// const ob = {
//     f: 'ahmed',
//     l: 'gouda',
//     fn: () =>{
//         return this;
//     }
// }
// console.log(ob.fn())
// console.log(ob.fn)
// }
// test()
// console.log(ob.fn('ahmd', 'goda'))


// class key => name refer to the block => { constrctor (parameters) =>{prop} and method}
// class testing {
//     constructor (name, age){
//         this.age = age // if there parameters in the constrctor then we pass arguments when create new obj
//         this.name = name
//     }

//     funck(){
//         console.log('funck is')
//     }
//     usename(){
//         console.log(`${this.name} from new`)
//     }
// }
// let obj = new testing('ahmed' , 28) // order matter here when calling
// ----- //


// function rgb(color){
//     let arr = [...color]
//     let nxtar = []
//     let rgbari = ['R', 'G', 'B']
//     while(arr.length !== 1){
//     for (i=1; i<arr.length; i++){
//         if (arr[i] === arr[i-1]){
//             nxtar.push(arr[i])
//         }else{
//             for (j=0; j<rgbari.length; j++){
//                 if (rgbari[j] !== arr[i] && rgbari[j] !== arr[i-1]){
//                     nxtar.push(rgbari[j])
//                 }
//             }
//         }
//     }
//     arr = [...nxtar]
//     nxtar = []
//     }
//     return arr;
// }
// console.log(rgb('RGBG'))


// function isValidWalk(walk) {
//     let x = 0;
//     let y = 0;
//     if (walk.length !== 10){
//         return 'not 10 steps'
//     }else{
//         for (dir of walk){
//             switch(dir){
//                 case 'n': y++; break;
//                 case 's': y--; break;
//                 case 'e': x++; break;
//                 case 'w': x--; break;
//             }
//         }
//     }
//     if (x === 0 && y === 0){
//         return 'walk will fit'
//     }else{
//         return '10 steps but too long'
//     }
// }
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','w']))


// function createPhoneNumber(numbers){
//     let finalnum, num1 = 1, num2 = 1;
//     let start = [], end = []
//     while(num1 <=3){
//         start.push(Math.floor(Math.random() * numbers.length))
//         num1++
//     }
//     while(num2 <=4){
//         end.push(Math.floor(Math.random() * numbers.length))
//         num2++
//     }
//     finalnum = `(123) ${start.join('')}-${end.join('')}`
//     return finalnum;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

////////////////////////////
// let arr = [1 ,2 ,3 ,4 ,5]
// for (let i=0; i<arr.length; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000)
// }

// function main(){
//     function notmain(){
//         return 'main from one'
//     }
//     return notmain()
//     function notmain(){
//         return 'main from two'
//     }
// }
// console.log(main())

// var abc = 'ahmed'
// function abc(){
//     console.log('from')
//     return 'gouda'
// }
// console.log(abc)
// abc()
/////


// const ob = {
//     n: 'ahmed',
//     a: 28,
//     m: function(){
//         console.log(`my name is ${this.n} and my age is ${this.a}`)
//         let arow = () =>{
//             console.log(this)
//         }
//         arow()
//     }
// }
// ob.m()
// const obj = {}
// obj.__proto__ = ob;
// obj.n = 'gouda'
// ob.m.call(obj)
// obj.ad = 'adding'
// obj.m()



// start = [12, 10, 20]
// end = [25, 20, 30] // how many tasks


// weights = [10, 20, 30] // bag is 50
// values = [60, 100, 120]

