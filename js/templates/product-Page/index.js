export function createProduct(product) {

    const rootDiv = document.querySelector('main');
    rootDiv.innerHTML = '';
    const newProduct = document.createElement('div');
    newProduct.classList.add('container');
    rootDiv.appendChild(newProduct);

    newProduct.innerHTML = `
    <div class="card">
        <div class="card-slider">
            <div class="card-slider__nav slider-nav">
                <div class="slider-nav__item" tabindex="0"><img src="${product.imgLeft}" alt=""></div>
                <div class="slider-nav__item" tabindex="0"><img src="${product.imgCenter}" alt=""></div>
                <div class="slider-nav__item" tabindex="0"><img src="${product.imgRight}" alt=""></div>
                <div class="slider-nav__item" tabindex="0"><img src="${product.imgLeft}" alt=""></div>
                <div class="slider-nav__item" tabindex="0"><img src="${product.imgLeft}" alt=""></div>
            </div>
        <div class="card-slider__block slider-block">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="${product.imgLeft}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="${product.imgCenter}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="${product.imgRight}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="${product.imgLeft}" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="${product.imgLeft}" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="card-info">
        <span class="vendor">Артикул: ${product.term}</span>
        <h1 class="title">${product.name}</h1>
        <div class="testimonials">
            <div class="rating">
                <img src="/img/svg/star-product.svg" alt="Рейтинг 5 из 5">
                <img src="/img/svg/star-product.svg" alt="">
                <img src="/img/svg/star-product.svg" alt="">
                <img src="/img/svg/star-product.svg" alt="">
                <img src="/img/svg/star-product.svg" alt="">
            </div>
            <a href="#" class="testimonials__link">Отзывы 83</a>
        </div>
        <span class="available">В началии:${product.available} шт</span>
        <div class="price">
            <span class="price__current">${product.price} BYN</span>
            <span class="price__old">${product.oldPrice} BYN</span>
        </div>
     
        <button class="product__btn btn product__btn-page" data-id="${product.id}">Добавить в корзину</button>
        <span class="please-register please-register-product_page">Для добавления в корзину, пожалуйста <a href="/registration">зарегестрирутесь!</a></span>
    </div>
    </div>
        `;
}




