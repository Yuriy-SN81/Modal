const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const poUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
   e.preventDefault();
   openPopUp.classList.add('active')
})

closePopUp.addEventListener('click', () => {
    poUp.classList.remove('active');
})