/*Sign In */

let username = document.querySelector('#username')
let password = document.querySelector('#password')

let usernameValidation = document.querySelector('#usernameValidation')
let passwordValidation = document.querySelector('#passwordValidation')
let submitBtn = document.querySelector('.btn1')


const goodusername = /^(?=.{3,30}$)[\p{L}\p{N}](?:[._-]?[\p{L}\p{N}]){1,29}$/u
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;

username.addEventListener('input', function (ev) {
    let compare = goodusername.test(ev.target.value)
    usernameValidation.innerText = compare ? 'Okay' : 'Wrong'
})

password.addEventListener('input', function (ev) {
    let compare = strongPassword.test(ev.target.value)
    passwordValidation.innerText = compare ? 'Okay' : 'Wrong'
})

submitBtn.addEventListener('click', function () {
    if 
    (usernameValidation.innerText === 'Okay' && passwordValidation.innerText === 'Okay') 
    {
        alert('Successfull Registration!')
    } 
    else
    {
        alert('Wrong input!')
    }
})



