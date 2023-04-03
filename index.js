console.log(window);

const container = document.querySelector('.container');

container.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').style.background = '#f5f5dc';
})

const imgName1 = document.querySelector('#imgName1');
imgName1.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName1').style.color = '#6b5b95';
})
const imgName2 = document.querySelector('#imgName2');
imgName2.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName2').style.color = '#34A853';
})

const imgName3 = document.querySelector('#imgName3');
imgName3.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName3').style.color = '#4040a1';
})

const imgName4 = document.querySelector('#imgName4');
imgName4.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName4').style.color = '#d9ad7c';
})

const imgName5 = document.querySelector('#imgName5');
imgName5.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName5').style.color = '#c1502e';
})

const imgName6 = document.querySelector('#imgName6');
imgName6.addEventListener ('click', (e) => {
    e.preventDefault();
    document.querySelector('#imgName6').style.color = '#ff0000';
})
