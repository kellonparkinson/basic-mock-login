const form = document.getElementById('login-form')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const submitLogin = (event) => {
    event.preventDefault()

    let username = usernameInput.value
    let password = passwordInput.value

    let creds = {
        username,
        password
    }

    axios
    .post('http://localhost:5005/login', creds)
    .then((res) => {
        let data = res.data
        alert(data)
        // in a real app you would do more axios requests to get the user's account data
        // or have the backend controller do this automatically on successful login

        // then do DOM manipulation
    })
    .catch((err) => {
        console.log(err)
    })
}

form.addEventListener('submit', submitLogin)