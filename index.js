// Code your solutions in this file

const cards = []

function writeCards(name, eventName) {
   
    for(let i = 0; i < name.length; i++) {
       
        cards.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
        
    }
    return cards
}



const countDownArray = []

function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i--)
    }
}