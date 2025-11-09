/*Sign Up */

let username2 = document.querySelector('#username2')
let password2 = document.querySelector('#password2')
let email = document.querySelector('#email')
let phonenumber = document.querySelector('#phonenumber')

let usernameValidation2 = document.querySelector('#usernameValidation2')
let passwordValidation2 = document.querySelector('#passwordValidation2')
let emailValidation = document.querySelector('#emailValidation')
let phonenumberValidation = document.querySelector('#phonenumberValidation')
let submitBtn2 = document.querySelector('.btn2');

const goodusername2 = /^(?=.{3,30}$)[\p{L}\p{N}](?:[._-]?[\p{L}\p{N}]){1,29}$/u
const strongPassword2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;
const emailUnicode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const azMobile = /^(?:(?:\+?994)|0)\s*(?:50|51|55|60|70|77|99)[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

username2.addEventListener('input', function (ev) {
    let compare2 = goodusername2.test(ev.target.value)
    usernameValidation2.innerText = compare2 ? 'Okay' : 'Wrong'
})

password2.addEventListener('input', function (ev) {
    let compare2 = strongPassword2.test(ev.target.value)
    passwordValidation2.innerText = compare2 ? 'Okay' : 'Wrong'
})

email.addEventListener('input', function (ev) {
    let compare2 = emailUnicode.test(ev.target.value)
    emailValidation.innerText = compare2 ? 'Okay' : 'Wrong'
})

phonenumber.addEventListener('input', function (ev) {
    let compare2 = azMobile.test(ev.target.value)
    phonenumberValidation.innerText = compare2 ? 'Okay' : 'Wrong'
})

submitBtn2.addEventListener('click', () => {
    if 
    (
        usernameValidation2.textContent === 'Okay' &&
        passwordValidation2.textContent === 'Okay' &&
        emailValidation.textContent === 'Okay' &&
        phonenumberValidation.textContent === 'Okay'
    ) 
    {
        alert('Successfull Registration!');
    } 
    else 
    {
        alert('Wrong input!');
    }
});