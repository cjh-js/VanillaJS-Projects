const form = document.querySelector('.formjs');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const nameErr = document.querySelector('.nameErr');
const emailErr = document.querySelector('.emailErr');
const pwErr = document.querySelector('.pwErr');
const confirmErr = document.querySelector('.confirmErr');

function checkPW(password, password2){
    if(password.value.trim().length < 6){
        pwErr.innerText = 'Password must be at least 6 characters';
        password.style.border = '3px solid red';
    } else {
        pwErr.innerText = '';
        password.style.border = '3px solid blue';
    }
    if(password2.value.trim() !== password.value.trim()){
        confirmErr.innerText = 'Passwords do not match';
        password2.style.border = '3px solid red';
    } else if(password2.value.trim() === password.value.trim() && password2.value.trim() !== '') {
        confirmErr.innerText = '';
        password2.style.border = '3px solid blue';
    } else {
        confirmErr.innerText = 'Passwords are required';
        password2.style.border = '3px solid red';
    }
}

function checkEmail(email){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        email.style.border = `3px solid blue`;
        emailErr.innerText = ``;
    } else {
        emailErr.innerText = 'Email is not valid';
        email.style.border = `3px solid red`;
    }
}

function checkName(name){
    if(name.value.trim() === '' || name.value.length < 3){
        nameErr.innerText = 'Username must be at least 3 characters';
        name.style.border = `3px solid red`;
    } else {
        name.style.border = `3px solid blue`;
        nameErr.innerText = ``;
    }
}

function handleSubmit(e){
    e.preventDefault();
    checkName(name);
    checkEmail(email);
    checkPW(password, confirm);
}

function init(){
    form.addEventListener('submit', handleSubmit);
}
init();