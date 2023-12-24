

if (!localStorage.users) {
    window.localStorage.setItem('users', [])
}

let regBtn = getById('registerForm')
if (regBtn) {
    var myForm = document.forms['myForm']
    let userName    = myForm.elements['userName'], 
        email       = myForm.elements['email'], 
        password    = myForm.elements['password']
    
    regBtn.addEventListener('click', function (e) {
        validateInput(userName.value == '', 'user name can not be empty.')
        e.preventDefault();
        console.log(userName.value)
    })
}

function getById(id) {return document.getElementById(id)} 
function getAll(query) {return document.querySelectorAll(query)} 
function query(query) {return document.querySelector(query)} 
function validateInput(condition, msg) {
    localStorage.setItem('session', [])
    if(condition) {
        let messages = localStorage.session.validationMessages
        if(!messages) {
            messages = []
        } 
        messages.push(msg)
        localStorage.session.validation = messages
    }
}



