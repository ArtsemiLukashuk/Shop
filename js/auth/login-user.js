import userList from '../users.js';
import showErrors from '../show-errors.js';
import currentUser from '../current-user.js';
import { navigateToUrl } from '../routing.js';
import { checkIfHasErrors } from '../utils.js';
import storageService from '../storage-service.js';
import renderIndexHtml from '../render/render-index-html.js'

const EMAIL_REGEX = /\S+@\S+\.\S+/;

function validateLogin({ email, password }) {

    let errors = {
        email: [],
        password: [],
    };

    if (!email) {
        // errors = { ...errors, email: [...errors.email, 'Enter email'] };
        errors = { ...errors, email: [...errors.email, 'Введите email'] };
    }

    if (email && !userList.getUserByEmail(email)) {
        // errors = { ...errors, email: [...errors.email, 'User does not exist'] };
        errors = { ...errors, email: [...errors.email, 'Пользователь не существует'] };
    }

    if (
        userList.getUserByEmail(email)
        && userList.getUserByEmail(email).password !== CryptoJS.SHA3(password).toString()
    ) {
        // errors = { ...errors, password: [...errors.password, 'Invalid Password (does not match)'] };
        errors = { ...errors, password: [...errors.password, 'Неверный пароль (не совпадает)'] };
    }
    if (!email) {
        // errors = { ...errors, email: [...errors.email, 'Email cannot be empty'] };
        errors = { ...errors, email: [...errors.email, 'Email не может быть пустым'] };
    }

    if (email && !EMAIL_REGEX.test(email)) {
        // errors = { ...errors, email: [...errors.email, 'Email invalid format'] };
        errors = { ...errors, email: [...errors.email, 'Неверный формат email'] };
    }

    if (!password) {
        // errors = { ...errors, password: [...errors.password, 'Password cannot be empty'] };
        errors = { ...errors, password: [...errors.password, 'Пароль не может быть пустым'] };
    }

    return errors;
}

export default function loginUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const user = userList.getUserByEmail(email);

    const errors = validateLogin({ email, password });

    showErrors(errors);

    const hasErrors = checkIfHasErrors(errors)

    if (hasErrors) {
        return
    }

    currentUser.login(user);

    storageService.set('currentUser', JSON.stringify(user));

    renderIndexHtml();

    navigateToUrl('/');

    location.reload();
}

