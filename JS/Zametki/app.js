/*// Theory


// const array=[1, 2, 3, 5, 20, 42]
// // const array=new Array(1, 2, 3, 5, 20, 42)
// console.log(array[array.length-1])
// array[0]='Privet'
// console.log(array)
// array[array.length]='bye bye'
// console.log(array)*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElenent = document.getElementById('list')
// console.log(inputElement.value)

//const notes = ['записать блок про массивы', 'рассказать теорию про объектов', 'и наконец начать мейнить бабки']

// function render(){
// //     for (let i=0; i<notes.length; i++){
// //     listElenent.insertAdjacentHTML('beforeend', getNoteTemplay(notes[i]))  
// // }}
// for (let note of notes){
//     listElenent.insertAdjacentHTML('beforeend', getNoteTemplay(note))
// }}

//render()

// createBtn.onclick=function (){
//     if (inputElement.value.length===0){
//         return
//     }
//     // listElenent.innerHTML= 

//     listElenent.insertAdjacentHTML(
//     'beforeend', 
//     getNoteTemplay(inputElement.value)
//     )
//         inputElement.value=''
//}
// function getNoteTemplay(title){
//     return `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li> 
//         `
// }

/*
Object Theory 

const person={
    firstName: 'Rustem',
    lastName: 'Ramazanov',
    year: 1993,
    hasGirlfriend: false,
    language: ['HTML', 'CSS', 'JavaScript'],
    getFullName: function(){
        console.log(person.firstName + ' ' + person.lastName)
    },
}


console.log(person.year)
console.log(person['language'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true
console.log(person[key])
// console.log(typeof person)
*/

const notes = [{
    title:'записать блок про массивы',
    completed: false,
},
{
    title:'рассказать теорию про объектов',
    completed: true,
},]

function render(){
    listElenent.innerHTML=''
    if (notes.length===0){
        listElenent.innerHTML='<p>Нет заметок</p>'
    }
        for (let i = 0; i < notes.length; i++){
        listElenent.insertAdjacentHTML('beforeend', getNoteTemplay(notes[i], i))  
    }
}
    // for (let note of notes){
    //     listElenent.insertAdjacentHTML('beforeend', getNoteTemplay(note))
    // }}
    
render()

createBtn.onclick=function (){
    if (inputElement.value.length===0){
        return
    }
    // listElenent.innerHTML= 
    const newNote={
      title: inputElement.value,
      completed: false,  
    }
        notes.push(newNote)
        render()
        inputElement.value=''
    }

    listElenent.onclick = function(event){
        if (event.target.dataset.index){
            const index = parseInt(event.target.dataset.index)
            const type = event.target.dataset.type
        if(type==='toggle'){
            notes[index].completed=!notes[index].completed
        }else if (type==='remove'){
            notes.splice(index,1)
        }
    } render()
   
    }

function getNoteTemplay(note, index){
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class='${note.completed ? 'text-decoration-line-through': ''}'>${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success' }" data-index='${index}' data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type='remove' data-index='${index}'>&times;</span>
            </span>
        </li> 
        `
}
