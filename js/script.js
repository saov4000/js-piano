const keys = document.querySelectorAll('.key')
const playNote = (note)=>{
    const audio = new Audio(`notes/${note}.wav`)
    audio.play()
}

const handleMouseDown = (key)=>{
    playNote(key.getAttribute('data-note'))
    if(key.className.includes('black')){
        key.classList.add('black-pressed')
        return
    }
    key.style.background = '#ddd'
}

const handleMouseUp = (key)=>{
    if(key.className.includes('black')){
        key.classList.remove('black-pressed')
        return
    }
    key.style.background = 'white'
}

keys.forEach((key)=>{
    key.addEventListener('mousedown',()=>handleMouseDown(key))
    key.addEventListener('mouseup',()=>handleMouseUp(key))
})

const keyDownMapper = {
    "TAB": ()=>handleMouseDown(keys[0]),
    "1": ()=>handleMouseDown(keys[1]),
    "q": ()=>handleMouseDown(keys[3]),
    "2": ()=>handleMouseDown(keys[4]),
    "w": ()=>handleMouseDown(keys[5]),
    "e": ()=>handleMouseDown(keys[6]),
    "4": ()=>handleMouseDown(keys[7]),
    "r": ()=>handleMouseDown(keys[8]),
    "5": ()=>handleMouseDown(keys[9]),
    "t": ()=>handleMouseDown(keys[10]),
    "6": ()=>handleMouseDown(keys[11]),
    "y": ()=>handleMouseDown(keys[12]),
    "u": ()=>handleMouseDown(keys[13]),
    "8": ()=>handleMouseDown(keys[14]),
    "i": ()=>handleMouseDown(keys[15]),
    "9": ()=>handleMouseDown(keys[16]),
    "o": ()=>handleMouseDown(keys[17]),
    "p": ()=>handleMouseDown(keys[18]),
    "-": ()=>handleMouseDown(keys[19]),
    "[": ()=>handleMouseDown(keys[20]),
    "]": ()=>handleMouseDown(keys[21]),
    "Backspace": ()=>handleMouseDown(keys[22]),
    "\\": ()=>handleMouseDown(keys[23]),
}

document.addEventListener('keydown',(event)=>{
    event.preventDefault()
    keyDownMapper[event.key]()
})