const socket = io()

let name;

let messageArea = document.querySelector('#message_area')
let textarea = document.querySelector('#textarea')
do{
    name= prompt('Please enter your name')
}
while(!name)

textarea.addEventListener('keyup',(e) =>{
    if(e.key == 'Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage(msg){
    let msg = {
        user:name,
        message: msg
    }
    appendMessage(msg, 'outgoing')
}

function appendMessage(msg, type){
     let mainDiv = document.createElement('div')
     let className= type
     mainDiv.classList.add(className, 'message')

}