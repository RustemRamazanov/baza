// let num = 42
// let firstName='Vladilen'
// const isProgrammer = true

// Запрещенные названия переменных
// let 123note ='11' начинать с цифр
// let my-num = 1  использовать тире
// let let  использовать зарезервированные слова

//alert()
//console.log(все что угодно)
// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)
// let num2=num+10
// console.log(num2, num)
// num=num2-num
// console.log(num2, num)

// let num3=num+10*2/3-1
// console.log(num3)
// let num4=num+10*2/(3-1)
// console.log(num4)
// let num5=(num+10)*2/3-1
// console.log(num5)


const resultElement =document.getElementById('result')
const input1 =document.getElementById('input1')
const input2 =document.getElementById('input2')
const submitBtn =document.getElementById('submit')
const plusBtn =document.getElementById('plus')
const minusBtn =document.getElementById('minus')
const multiplicationBtn =document.getElementById('multiplication')
const divisionBtn =document.getElementById('division')
let action ='+'

// console.log(resultElement.textContent)
// resultElement.textContent = 42
// const sum=input1.value+input2.value

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}
multiplicationBtn.onclick = function() {
    action = '*'
}

divisionBtn.onclick = function() {
    action = '/'
}

function printResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'green'}
    resultElement.textContent=result
}

function computNewAction(inp1, inp2, actionSymbol){
    const num1=Number(inp1.value)
    const num2=Number(inp2.value)
    if (actionSymbol == '+'){
        return num1+num2
    }else{
        if (actionSymbol == '-'){
            return num1-num2
        }else{
            if (actionSymbol == '*'){
                return num1*num2
            }else{
                if (actionSymbol == '/'){
                    return num1/num2
                }
            }
        }

    }
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2 
}
// submitBtn.onclick=function(){
//     if (action =='+'){
//         const sum = Number(input1.value)+Number(input2.value)
//         resultElement.textContent=sum
//         printResult(sum)
//     } else{ if (action =='-'){
//         const sum = Number(input1.value)-Number(input2.value)
//         resultElement.textContent=sum
//         printResult(sum)
//     } else {
//     if (action =='*'){
//         const sum = Number(input1.value)*Number(input2.value)
//         resultElement.textContent=sum
//         printResult(sum)
//     } else {
//     if (action =='/'){
//         const sum = Number(input1.value)/Number(input2.value)
//         resultElement.textContent=sum
//         printResult(sum)
//     }}}}
// }
submitBtn.onclick=function(){
    const result = computNewAction(input1, input2, action)
    printResult(result)
}

