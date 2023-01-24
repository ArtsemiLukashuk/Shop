import registerUser from '../auth/register-user.js'
import registationTemplate from '../templates/registationForm/index.js'


const rootDiv = document.querySelector('.grid-wrapper')

export default function renderRegistration() {
    rootDiv.innerHTML = registationTemplate;
    const registationForm = document.querySelector('.registation-form .form-wrapper > form')
    registationForm.addEventListener('submit', registerUser)
}



