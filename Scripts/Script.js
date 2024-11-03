
const keysContainer = document.querySelector('.keys');

const buttonsData = [
    { label: '+', class: 'same' },
    { label: '7' }, { label: '8' }, { label: '9' },
    { label: '-', class: 'same' },
    { label: '4' }, { label: '5' }, { label: '6' },
    { label: '*', class: 'same' },
    { label: '1' }, { label: '2' }, { label: '3' },
    { label: '/', class: 'same' },
    { label: '0' }, { label: '.' },
    { label: '=', action: 'calculate' },
    { label: 'C', action: 'clear' }
];



buttonsData.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button.label;
    btn.className = button.class || '';
    
    
    if (button.action === 'calculate') {
        btn.addEventListener('click', totalValue);
    } else if (button.action === 'clear') {
        btn.addEventListener('click', clearDisplay);
    } else {
        btn.addEventListener('click', () => appendToDisplay(button.label));
    }
    
    keysContainer.appendChild(btn);
});

// Functions to handle display and calculations
const display = document.getElementById("display");

function appendToDisplay(input) {    
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function totalValue() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}









