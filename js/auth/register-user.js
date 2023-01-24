import userList from '../users.js';
import { generateId } from '../utils.js';
import showErrors from '../show-errors.js';
import currentUser from '../current-user.js';
import { navigateToUrl } from '../routing.js';
import { checkIfHasErrors } from '../utils.js';
import storageService from '../storage-service.js';
import renderIndexHtml from '../render/render-index-html.js'

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([A-Za-z]+\d+)|(\d+[A-Za-z]+))[A-Za-z\d]/;

function validateRegistration({ userName, email, password, repeatPassword }) {

    let errors = {
        userName: [],
        email: [],
        password: [],
        repeatPassword: [],
    };

    if (!userName) {
        // errors = { ...errors, email: [...errors.email, 'Email cannot be empty'] };
        errors = { ...errors, userName: [...errors.userName, 'Имя не может быть пуст'] };
    }

    if (!email) {
        // errors = { ...errors, email: [...errors.email, 'Email cannot be empty'] };
        errors = { ...errors, email: [...errors.email, 'Email не может быть пуст'] };
    }

    if (email && !EMAIL_REGEX.test(email)) {
        // errors = { ...errors, email: [...errors.email, 'Email invalid format'] };
        errors = { ...errors, email: [...errors.email, 'Email не верный формат'] };
    }

    if (!password) {
        // errors = { ...errors, password: [...errors.password, 'Password cannot be empty'] };
        errors = { ...errors, password: [...errors.password, 'Пароль не может быть пустым'] };
    }

    if (password && password.length < MIN_PASSWORD_LENGTH) {
        // errors = { ...errors, password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters.`] };
        errors = { ...errors, password: [...errors.password, `Пароль должен содержать не менее  ${MIN_PASSWORD_LENGTH} символов.`] };
    }

    if (password && !PASSWORD_REGEX.test(password)) {
        // errors = { ...errors, password: [...errors.password, 'Password invalid format'] };
        errors = { ...errors, password: [...errors.password, 'Неверный формат пароля'] };
    }

    if (password !== repeatPassword) {
        // errors = { ...errors, repeatPassword: [...errors.repeatPassword, 'Passwords does not match'] };
        errors = { ...errors, repeatPassword: [...errors.repeatPassword, 'Пароли не совпадают'] };
    }

    return errors;
}

export default function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get('userName')
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword')

    const errors = validateRegistration({ userName, email, password, repeatPassword });

    showErrors(errors);

    const hasErrors = checkIfHasErrors(errors)

    if (hasErrors) {
        return
    }

    const hashedPassword = CryptoJS.SHA3(password);

    const newUser = {
        userName,
        id: generateId(userList.users),
        email,
        password: hashedPassword.toString()
    };

    userList.add(newUser);
    currentUser.login(newUser);

    storageService.set('users', JSON.stringify(userList.users));
    storageService.set('currentUser', JSON.stringify(currentUser.userData));

    renderIndexHtml();

    navigateToUrl('/');

    location.reload();
}
