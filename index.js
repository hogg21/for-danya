const PlusBtn = document.querySelector('#plus');
const MinusBtn = document.querySelector('#minus');
const h1 = document.querySelector('h1');

let count = 0;
h1.innerText = count;
function render() {
    h1.innerText = count;
    if (count > 0) {
        MinusBtn.removeAttribute('disabled', '');
    } else{
        MinusBtn.setAttribute('disabled', '');
    }
};

PlusBtn.addEventListener('click', () => {
    count++;
    render();

})

MinusBtn.addEventListener('click', () => {
    count--;
   render();
})