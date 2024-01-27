import ('/files/js/app.js')
const demo = query('.topHeader').innerHTML = topHeaderContents
const mainHeader = query('#mainHeader').innerHTML = mainHeaderContents
if (!localStorage.getItem('users')) {
    window.localStorage.setItem('users', [])
}

let closeBtns = getAll('.closeBtn')
closeBtns.forEach((btn)=>{
    btn.addEventListener('click', function () {
        query(btn.getAttribute('data-close')).remove()
    })
})

window.addEventListener('load', function () {
    getById('preloading').style.display = 'none';
    let sessionUser = sessionStorage.getItem('regUser')
    if (sessionUser) {
        let currentUser = JSON.parse(sessionUser)
        getById('userMenuBtn').classList.add('slideDown');
        query('#signupBtn').remove();
        query('#signinBtn').remove();
        query('#userMenuBtn button').innerHTML = `<i class="fa fa-user"></i> ${currentUser.userName}`
        
    }
})

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } 
    timer
  }, speed);
}


// }
const errorsWrapper = query('.errors')
const filterAlphanum = /^[a-zA-Z0-9_]+$/
const emailSyntax = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

const userSignoutLink = getById('signout')
// userSignoutLink.onclick = function (e) {
//     e.preventDefault()
//     console.log(sessionStorage.removeItem('cUser'))
// }
      
function validatePassConfirm(e, c) {
    let hasErrors = 0
    if (e.value == '') { hasErrors++;errors.push('Password confirmation is required.')
} else {if (e.value != c.value){hasErrors++;errors.push('Password confirmation must by typical to password')}}
    
    if (hasErrors) {e.classList.add('hasErrors')}else{e.classList.remove('hasErrors')}
}

function validatePassword(e) {
    let hasErrors = 0
    if (e.value == '') {
        hasErrors++;errors.push('Password is required.')
    } else {
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const digit = /[0-9]/;
    const symbol = /[!@#$%^&*()_+~`{}|:;'"<>?,.]/;
    if (e.value.length < 8 || e.value.length > 32) {hasErrors++;errors.push('Password valid length is between 4 and 16 chars.')}
    if (!lowerCase.test(e.value)) {hasErrors++;errors.push('Password must contain at least one lower-case char.')}
    if (!upperCase.test(e.value)) {hasErrors++;errors.push('Password must contain at least one upper-case char.')}
    if (!digit.test(e.value)) {hasErrors++;errors.push('Password must contain at least one number.')}
    if (!symbol.test(e.value)) {hasErrors++;errors.push('Password must contain at least one symbol char.')}
}
if (hasErrors) {e.classList.add('hasErrors')}else{e.classList.remove('hasErrors')}
}
function validateEmail(e) {
    let hasErrors = 0
    if (e.value == '') { hasErrors++;errors.push('Email is required.')}
    if (e.value != '') {if (!emailSyntax.test(e.value)) { hasErrors++;errors.push('email format is not valid.')}}
    if (hasErrors) {e.classList.add('hasErrors')}else{e.classList.remove('hasErrors')}
}

function validateUserName(e) {
    let hasErrors = 0
    if (e.value == '') {
        hasErrors++
        errors.push('User name is required.')
    } 
    else {
        
        if (e.value.length < 4 || e.length > 16) { hasErrors++; errors.push('User name valid length is between 4 and 16 chars.')}
        if (!filterAlphanum.test(e.value)) { hasErrors++; errors.push('User name accepts only alphanumeric chars.')}
    }
    if (hasErrors) {e.classList.add('hasErrors')}else{e.classList.remove('hasErrors')}
}

getAll('[placeholder]').forEach(function (ip) {
    
    ip.addEventListener('focus', function () {
        ip.setAttribute('data-text', ip.getAttribute('placeholder'))
    ip.setAttribute('placeholder', '')
    })
    ip.addEventListener('blur', function () {
        ip.setAttribute('placeholder', ip.getAttribute('data-text'))
    })
});

const localUsers = localStorage.getItem('users')
function getById(id) {return document.getElementById(id)} 
function getAll(query) {return document.querySelectorAll(query)} 
function query(query) {return document.querySelector(query)} 
function getByName(query) {let x = document.getElementsByName(query); return x != null ? x[0] : null} 
function createAlert(item){
    let newError = document.createElement('DIV')
        newError.classList.add("error")
        newError.innerHTML = item;
        let line = document.createElement('div')
        line.classList.add('line')
        newError.appendChild(line)
    errorsWrapper.appendChild(newError)
    setTimeout(()=>{
        newError.remove()
    }, 10000)
}

// function validEmail(e) {
    
// }


const renderErrors = (arr) => {
    arr.forEach((item)=>{
        createAlert(item)
        
    })
}

function redirectMe (uri, time) {
    setTimeout(function() {
        window.location.href = uri;  // Replace with your desired URL
    }, time*1000); 
}

function showEmptyFormError() {
    let e = ['Both fields are required']
    parseErrors(e)
}
function close(el) {
    console.log('clicked')
    let customAlert = query(el.getAttribute('data-close'))
    customAlert.style.display = 'none';
}
function saveUser (fs) {
            
    let user = new User (fs);
    
    const users = localUsers == ''? [] : JSON.parse(localUsers)
    user.id = users.length +1
    users.push(user)
    let usersJson = JSON.stringify(users)
    localStorage.setItem('users', usersJson)
        return true
    
    //console.log(localStorage.getItem('users'))
    
}      
const userExists = function (fs) {
    if (localUsers == '') {
        return false
    } else {
        let foundUsers = JSON.parse(localUsers)
        
        let ue = foundUsers.find((function (entry) { 
            return entry.email === fs.email.value || entry.userName === fs.userName.value})
        )
        return (ue ? true : false)
    }
}
function showUserExistsError(fs) {
    getById('foundUserName').inneerHTML = fs.userName.value
    getById('foundEmail').inneerHTML = fs.email.value
    
    query('.userExists').classList.add('show')
}
function validateInputs (fs) {
    let errors = []
    if (fs.userName.value.length ==0) {
        fs.userName.classList.add('hasError') 
        errors.push('User name is required.')

    } else {
        if (fs.userName.value.length < 4 || getById('userName').value.length > 20) {
            fs.userName.classList.add('hasError') 
            errors.push('User name must be at least 4 chars min')
        } else {userName.classList.remove('hasError') }
    }
    if (fs.email.value == '') {
        errors.push('Email is required.')
        fs.email.classList.add('hasError')
    } else {
        if (!emailSyntax.test(email.value)) {
            errors.push('Email format is not valid.')
            fs.email.classList.add('hasError')
        } else {fs.email.classList.remove('hasError')}
    }
    if (fs.password.value == '') {
        errors.push('Password is required.')
        fs.password.classList.add('hasError')
    } else {fs.password.classList.remove('hasError')}
    if (fs.cPassword.value=='') {
        errors.push('Confirm Password is empty.')
        fs.cPassword.classList.add('hasError')
    } else {
        if (fs.cPassword.value !== password.value) {
            errors.push('Password and confirm password must be equals.')
            fs.cPassword.classList.add('hasError')
        } else {
            fs.cPassword.classList.remove('hasError')
        }  
    }
    parseErrors (errors)
    return errors;
}
function parseErrors (errors) {
    getById('errors').innerHTML = ''
    errors.forEach(error=> {
        getById('errors').innerHTML += newError(error)
    })
}
function showWelcomeMessage(m) {
    getById('regUser').innerHTML = m
    query('.loginWelcome').classList.add('show');
}
function newError (m) {

    return `<div class="error">${m}
    <div class="line"></line>
    </div>`
}




