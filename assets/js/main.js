
const main = document.querySelector('.boxContainer');
const score = document.querySelector('.score');
const cpuAction = document.querySelector('.cpuAction');
const box = document.querySelector('.box')


let box = ["purple", "pink", "blue", "red"];

function listeleme(e){
    e.preventDefault()
    if(text.value === ''){
        alert('Burayı boş bırakmayın!')
    }
    else{
        list.innerHTML += text.value
    text.value = ''
    bindBoxContainer()
    }
}

function bindBoxContainer(){
    let cardBoxs = document.querySelectorAll('.box');
    for (const boxs of cardBoxs) {
        boxs.addEventListener('click', box)
    
    }
}
function box(){
    let innerText = this.parentElement.querySelector()
    this.parentElement.querySelector() = innerText
}

function playForCpu(){
    return action[Math.floor(Math.random()* 8)];
 }

setTimeout(funcion)(() => {
    bindBoxContainer()
 }, randomInt(3000, 3500));






