// 1 function Declaration 
// работает даже если сначала вызвать потом объявить
// function greet(name){
//     console.log('hi -', name)
// }


// // Function Expression
// // Необходимо сначала объявить, и после можно вызывать
// const greet2=function(name){
//     console.log('2 hi -', name)
// }
// greet('Rustem')
// greet2('Rustem')
// // console.dir(greet)

// // setTimeout Использует какую то функцию с задержкой в указанный интервал
// // setTimeout(greet, 1500)
// // ниже пример таймера на 1500 милисекунд
// setTimeout(function(){
//     greet('Rustem')
// }, 1500)

// // setInterval выполняет какую то функцию раз в указанный период
// setInterval(function(){
//     console.log(Math.random())
// }, 1000)

// let counter = 0
// const interval = setInterval(function(){
//     // if (counter==5){
//     //     clearInterval(interval)
//     // }else{
//     //     console.log(++counter)
//     // }
//     console.log(++counter)
// }, 100)


// 2 Arrow function 
// function greet(name){
//     console.log('hi -', name)
// }
// const arrow = (name, age) => {
//     console.log('Hello - ', name, age)
// }
// arrow('Rustem', 11)
// const arrow2 = (name) => console.log('Hello - ', name)


// function pow(num,exp){
//     return Math.pow(num, exp)
// }
// const pow2 = (num,exp) => Math.pow(num, exp)

// console.log(pow(5,38))
// arrow2('Rustem', 17)


// 3 ============= Defolt parameters
// const sum =(a=40, b=a/2)=> a+b
// // console.log(sum(40,2))
// // console.log(sum(40))

// function sumAll(...numbers){
//     // let res = 0
//     // for (let num of numbers)
//     // res+=num
//     // return res
//     return numbers.reduce((acc, cur)=>(acc+=cur), 0)
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// // 4 Closures Замыкание
// function createPerson(name){
//     return function(lastname){
//        console.log(name+ ' '+ lastname) 
//     }
// }

// const addLastName = createPerson('Vladilen')
// addLastName('Ivanov')
// addLastName('Petrov')

// 4 Data 

// const start = new Date(1000*60*60*24*365)
// const date = new Date(2011, 0, 4, 12, 42, 13)
// console.log(now)
// console.log(now.getFullYear)
// console.log(now.getMonth)
// console.log(now.getDate)

// now.setFullYear(2055)
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())
let mode = 'full'
const now = new Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


function bindMode(name){
    return function(){
        mode = name
        upDate()
    }
}

fullBtn.onclick=bindMode('full')
dateBtn.onclick=bindMode('date')
timeBtn.onclick=bindMode('time')

setInterval(upDate, 100)
upDate()
function upDate(){
    output.textContent = format(mode)
}
// Pure Function
function format(formatMode){
    const now = new Date()
    switch (formatMode){
        case 'time': return now.toLocaleTimeString()+'.'+now.getMilliseconds()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}