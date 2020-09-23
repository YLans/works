let toRegister = document.querySelector('.btn_toRegister');
let enterForm = document.querySelector('.main_enter');
let regForm = document.querySelector('.main_register');
toRegister.onclick = function(e) {
    e.preventDefault();
    enterForm.style = 'margin-left: -500px; margin-right: 30px';
};
document.querySelector('.main_toEnter').onclick = function() {
    enterForm.style = '';
};