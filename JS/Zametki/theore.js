// const names = ['Igor', 'kolya', ' vanya', 'fedya']

// names.push ('Maks')  // Добавляет вконец массива
// names.unshift ('Dima')  // добавляет вначало массива

// const firstName = names.shift()  // удаляет первый элемент
// const name = names.pop()
//console.log('Names: ',names, name)
//console.log(names.reverse()) // создает новый развернутый массив

//console.log(names.toReversed())//переворачивает не меняя исходный
// const letters =['e', 'c', 'd', 'b', 'a']
// console.log(letters.sort(function(a,b){
//     return b.charCodeAt(0)-a.charCodeAt(0)
// }))
// console.log(letters)
//console.log(names.splice(2,1))// первый аргумент позиция с которой удаляем, второй аргумент показывает сколько элементов удаляем

// 3 Заменяет элементы в массиве
// const greatWomen = 'kolya'
// const index= names.indexOf(greatWomen)
// console.log(index)
// const newNames= names.with(index, 'Katerina')
// names[index]='Katerina'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// 4 Замена элементов (map всегда возвращает новый массив с измененными данными)
// const capitalName = names.map(function(name){
//     const newName = name + '!'
//     return newName
//    //  return name.toLowerCase()
// })
// console.log(capitalName)

// 5 Проверка наличи элемента в массиве

// console.log(names.includes('Igor'))
// console.log(names.indexOf('Igor') !== -1) // поиск индекса, и проверка что он не равен  -1

const people =[
    {name: 'Rustem', budget: 15600},
    {name: 'Sveta', budget: 3600},
    {name: 'Olya', budget: 2100},
    {name: 'Maks', budget: 7400}]

// 6 Поиск в массиве обьектов
    // let findedPerson
// for(let person of people){
//     if (person.budget=== 3600){
//         findedPerson=person
//     }
// }

// const findedPerson = people.find(function(person){
//     return person.budget===2100
//     // if (person.budget===2100){
//     //     return true
//     // }
// })

// const finded = people.find((p)=> p.budget === 5600)// тоже самое но записано стрелочной функцией
// console.log(findedPerson)
// console.log(finded)

// 7 Фильтр 
// let sumBudget = 0
//  const filtered = people.filter(function(p){
//     return p.budget > 5000
//  })

// console.log(filtered)
// filtered.forEach(function (p){
//     sumBudget = sumBudget+ p.budget
// })
// const sumBudget = people
//     .filter((p)=> p.budget>5000)
//     .map((p)=>p.budget)
//     .reduce((acc, p)=>acc+p, 0)

// console.log(sumBudget)

// const string ='Привет как дела?'
// const reversed = string.split('').toReversed().join('')
// console.log(reversed)