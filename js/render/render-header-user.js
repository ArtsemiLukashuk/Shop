import currentUser from '../current-user.js'

export default function logOutHeader() {

    let userName = currentUser.userData.userName;
    const rootDiv = document.querySelector('.header__auth');

    rootDiv.innerHTML = `
    <div class="header-email_wrapper">
    <span class="header-email_text">Приветствуем, ${userName}</span>
    <a href="" class="logout"><i class="fa fa-sign-out" aria-hidden="true"></i></a>
        `;
}

