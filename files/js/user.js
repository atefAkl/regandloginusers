class User {

    id
    constructor(p)
    {
        this.userName = p.userName.value
        this.email = p.email.value
        this.password = p.password.value
    }

    role = 0;
    profile = {}

    favourits = [];
    purchaces = [];

    cart = [];

}
function Profile () {
    return {
        fullName: ''
    }
}