let regBtn = getById('registerForm')
if (regBtn) {
    var errors = []
    
    
    let userName    = myForm.elements['userName'], 
        email       = myForm.elements['email'], 
        password    = myForm.elements['password'],
        confirmPassword    = myForm.elements['confirmPassword']
    regBtn.addEventListener('click', function (evt) {
        evt.preventDefault()
        errorsWrapper.innerHTML = ''
        validateUserName(userName)
        validateEmail(email)
        validatePassword(password)
        validatePassConfirm(confirmPassword, password)
        
        if (errors.length) {
            renderErrors(errors)
            errors = []
        } else {
            
            const storedUsers = localStorage.getItem('users')
            
            let user = new  User(userName.value, email.value, password.value)
            user.id = storedUsers == null ? 0 : storedUsers.length
            if (storedUsers.length == 0) { //there's no users stored ? store first user
                
                initializeUsers(user)
                redirectMe('./signin.html')
            } else { // else
                // get stored users
                let theUsers = JSON.parse(storedUsers);
                // check if there's stored user taking the same {username} or {email}
                //const userExists = theUsers.search ((u)=>{u.userName == userName || u.email == email})
                const matchingUser = theUsers.find((user) => {
                    return user.userName === userName.value || user.email === email.value;
                  });
                console.log('u=>'+matchingUser)

                if (matchingUser) { // if found
                    // Show error says the user Name or email is already taken
                    showUserExistError();
                } else { // else
                    // Update users in local storage
                    updateUsers(user)
                }
                
            }
        }
        //localStorage.clear()
        
        //console.log(JSON.stringify(user))
    })
    
}

window.onload= function () {
    let closeErrorWindow=getById('closeErrorWindow')
    let userExistsError=getById('userExistsError')
    closeErrorWindow.addEventListener('click', ()=>{ userExistsError.classList.remove('show')})
}

function showUserExistError() {
    let errorSection = query('.userExists')
    getById('foundUserName').innerHTML = userName.value
    getById('foundEmail').innerHTML = email.value
    errorSection.classList.add('show')

}

function initializeUsers (u) {
    let users = [];
    users.push(u);
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))
}
function updateUsers (u) {
    users = JSON.parse(localStorage.getItem('users'))
    users.push(u);
    console.log(users)
    localStorage.setItem('users', JSON.stringify(users))
}

