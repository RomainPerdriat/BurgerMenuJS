
const icone = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');
icone.addEventListener('click', () =>{
    console.log(`icone cliquée`)
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
})