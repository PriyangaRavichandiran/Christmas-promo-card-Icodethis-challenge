// Write your JavaScript code here
const closebtn = document.getElementById('close')
const mainEl = document.querySelector('main')

closebtn.addEventListener('click', () => {
    mainEl.classList.add('hidden')

    setTimeout(() => {
        mainEl.classList.remove('hidden')
    },3000)
})

const giftBtn = document.getElementById('gift')

giftBtn.addEventListener('click', () => {
    for (let i = 0; i <= 100; i++){
        createSnowFlake()
    }
   
})
function createSnowFlake() {
    const snowEl = document.createElement('div');
    snowEl.classList.add('snow');

    snowEl.style.left = Math.random() * window.innerWidth + 'px';
    snowEl.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(snowEl)

    setTimeout(() => {
        snowEl.remove();
    }, 10000)
}