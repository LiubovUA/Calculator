window.addEventListener('load', function OnWindowLoaded() {

const signs = [
    'AC', 'х²', 'х³', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '√', '0', '.', '='
];

const calc = document.getElementById('calc');

const textArea = document.getElementById('inputVal');

signs.forEach(function (sign) {
    const signElement = document.createElement('div');
    signElement.className = 'btn';
    signElement.innerHTML = sign;
    calc.appendChild(signElement);
});

document.querySelectorAll('#calc-wrap .btn').forEach(function (button) { 
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {   
    if (e.target.innerHTML === 'AC') { 
        textArea.innerHTML = '0';
    } else if (e.target.innerHTML === '=') { 
        textArea.innerHTML = eval(textArea.innerHTML);
    } else if (textArea.innerHTML === '0') {
        textArea.innerHTML = e.target.innerHTML;
    } else if (e.target.innerHTML === '√') { 
        textArea.innerHTML = Math.sqrt(textArea.innerHTML);
    } else if (e.target.innerHTML === 'х²') { 
        textArea.innerHTML = Math.pow(textArea.innerHTML, 2);
    } else if (e.target.innerHTML === 'х³') { 
        textArea.innerHTML = Math.pow(textArea.innerHTML, 3);   
    } else { 
        textArea.innerHTML += e.target.innerHTML;
    }
}
});