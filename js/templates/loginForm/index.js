const template = `
<div class="login-form wow fadeInLeft" data-wow-delay=".3s">
    <div class="form-wrapper">
        <h3>Войти</h3>
        <form>
            <input name="email" placeholder="Email"/>
            <span class="error"></span>
            <input name="password" type="password" placeholder="Пароль"/>
            <span class="error"></span>
         <button type="submit">Войти</button>

            <label>Если вы еще не зарегистрированы - нажмите  <a href="/registration">сюда</a></label>
         </form>
    </div>
    <div class="form-img"></div>
</div>
`;

export default template;