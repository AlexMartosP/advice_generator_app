const feth_url = 'https://api.adviceslip.com/advice';
let width = window.innerWidth;

const button = document.getElementById('button');

const advicenrOutput = document.getElementById('advicenrOutput');
const quoteOutput = document.getElementById('quoteOutput');
const divider = document.getElementById('divider');

button.addEventListener('click', async () => {
    try {
        const advice = await (await fetch(feth_url)).json();

        advicenrOutput.innerText = `ADVICE #${advice.slip.id}`;
        quoteOutput.innerText = `"${advice.slip.advice}"`;
    } catch (error) {
        console.log(error);
    }
})

window.addEventListener('resize', () => {
    width = window.innerWidth;

    if (width <= 375) {
        divider.src = 'images/pattern-divider-mobile.svg';
    } else {
        divider.src = 'images/pattern-divider-desktop.svg';
    }
});

window.onload = async () => {
    try {
        const advice = await (await fetch(feth_url)).json();

        advicenrOutput.innerText = `ADVICE #${advice.slip.id}`;
        quoteOutput.innerText = `"${advice.slip.advice}"`;
    } catch (error) {
        console.log(error);
    }

    if (width <= 375) {
        divider.src = 'images/pattern-divider-mobile.svg';
    } else {
        divider.src = 'images/pattern-divider-desktop.svg';
    }
}