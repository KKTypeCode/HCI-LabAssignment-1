const sushi = document.getElementById('Sushi')
const onigiri = document.getElementById('Onigiri')
const omurice = document.getElementById('Omurice')
const display = document.getElementById('display')
const option = document.querySelectorAll('input[type="radio"][name="choice"]')

let selected = null

option.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        if (selected === e.target) {
            radio.checked = false
            selected = null
        } else {
            selected = e.target
            display.innerHTML = "Food"
        }
    })
})

function sushichoice() {
    let disp = display
    disp.innerHTML = 'Sushi'
}

function onigirichoice() {
    let disp = display
    disp.innerHTML = 'Onigiri'
}

function omuricechoice() {
    let disp = display
    disp.innerHTML = 'Omurice'
}