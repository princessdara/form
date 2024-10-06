let username = document.getElementById('username')
let form = document.getElementById('form')

let usernameError = document.getElementById('usernameError')

let phone = document.getElementById('phone')
let phoneError = document.getElementById('phoneError')

let email = document.getElementById('email')
let emailError = document.getElementById('emailError')


let password = document.getElementById('password')
let passwordError = document.getElementById('passwordError')


let pass2 = document.getElementById('pass2')
let passError = document.getElementById('passError')


function handleSub(e){
    if( username.value === ''){
        usernameError.innerHTML = 'Input your username'
        usernameError.style.color='red'
    }else{
        usernameError.innerHTML = '' 
    }
    if(phone.value === ''){
        phoneError.innerHTML='input your phonenumber'
        phoneError.style.color='red'
    }else if(phone.length !==11){
         phoneError.innerHTML='Your phone number must be exactly 11 digit'
        phoneError.style.color='red'
    }else{
        usernameError.innerHTML = '' 
    }
    if(email.value === ''){
        emailError.innerHTML='input your email'
        emailError.style.color='red'
    } else if(!(email.value).includes('@') && (email.value).includes('.')){ 
        emailError.innerHTML='Input valid email'
        emailError.style.color='red'
    }else {
      emailError.innerHTML=''
    }
    if(password.value ===''){
        passwordError.innerHTML='input your password'
        passwordError.style.color='red'
    }
    else if(password.value.lenght < 8){
         passwordError.innerHTML='password must be at least 8 characters long'
        passwordError.style.color='red'
    }else{
         passwordError.innerHTML=''
    }

    if( pass2.value === ''){
        passError.innerHTML='confirm your password'
        passError.style.color='red'

    }
    else if(pass2.value !== password.value){
        passError.innerHTML='Passwords do not match'
         passError.style.color='red'
    }else{
        passError.innerHTML='' 
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()
    handleSub()
    
})