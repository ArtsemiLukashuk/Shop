const template = `
<div class="registation-form wow fadeInLeft" data-wow-delay=".3s">
<div class="form-wrapper">
    <h3>Регистрация</h3>
    <form>
            
        <input name="userName"  placeholder="Имя"/>
        <span class="error"></span>

        <input name="email"  placeholder="Email"/>
        <span class="error"></span>

        <input name="password" type="password" placeholder="Пароль"/>
        <span class="error"></span>

        <input name="repeatPassword" type="password" placeholder="Повторите пароль"/>
        <span class="error"></span>

        <button type="submit">Создать аккаунт</button>

        <label>У вас уже есть аккаунт?  <a href="/login">Войти</a></label>
    </form>
    </div>
    <div class="form-img"></div>
</div>
`;

export default template;


