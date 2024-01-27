getById('login').addEventListener('click', function (e){
    e.preventDefault();
    //get registered users in the local storage
    const storedUsers = localStorage.getItem('users');
    if (null != storedUsers) {
        let theUsers = JSON.parse(storedUsers);
        const userExist = theUsers.find((user) => {
            return getById('email').value == user.email
        });
        if ( userExist !== undefined  ) {
            if (userExist.password == getById('password').value) {
                let pl = document.createElement('IMG')
                pl.setAttribute('src', '../files/images/preload.webp')
                pl.classList.add ('preloading')
                document.body.appendChild(pl)
                sessionStorage.setItem('cUser', JSON.stringify(userExist))
                redirectMe('/index.html', 3)
            }
            
            
        }
    }

})