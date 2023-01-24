import loginUser from '../auth/login-user.js'
import loginTemplate from '../templates/loginForm/index.js'


const rootDiv = document.querySelector('.grid-wrapper')
export default function renderLogin() {
    rootDiv.innerHTML = loginTemplate;
    const LoginForm = document.querySelector('.login-form .form-wrapper > form')
    LoginForm.addEventListener('submit', loginUser)
}

