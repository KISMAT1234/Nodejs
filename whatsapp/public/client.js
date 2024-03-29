const socket = io()
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')


textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('send', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 

socket.on('receive', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
    // console.log(msg)
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}