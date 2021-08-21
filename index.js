const PlusBtn = document.querySelector('#plus');
const MinusBtn = document.querySelector('#minus');
const h1 = document.querySelector('h1');

let count = 0;
h1.innerText = count;

PlusBtn.addEventListener('click', () => {
    count++;
    h1.innerText = count;
    if (!count) {
        MinusBtn.removeAttribute('disabled', '');
    }
})

MinusBtn.addEventListener('click', () => {
    count--;
    h1.innerText = count;
    if (!count) {
        MinusBtn.setAttribute('disabled', '');
    }
})