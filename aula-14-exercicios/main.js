const start = Number(document.querySelector('#input1'))
const end = Number(document.querySelector('#input2'))
const add = Number(document.querySelector('#input3'))
const res = document.querySelector('#res')

function contador (){
    for (c = start; c <= end; c = c + add){
        res.innerHTML = `<p> ${c} a</p>`
    }
}