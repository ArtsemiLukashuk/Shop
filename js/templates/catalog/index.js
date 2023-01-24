const template = `
<section class="products-lists container wow fadeInLeft" data-wow-delay=".3s">
    <div class="filter">
   
            <button class="catalogbtn button_type_all" data-filter="All">All</button>
            <button class="catalogbtn button_type_macbook" data-filter="macbook">Macbook</button>
            <button class="catalogbtn button_type_iphone" data-filter="iphone">Iphone</button>
            <button class="catalogbtn button_type_ipad" data-filter="ipad">Ipad</button>
            <button class="catalogbtn button_type_airpods" data-filter="airpods">AirPods</button>
            <button class="catalogbtn button_type_airpods" data-filter="tv">TV</button>
    </div>
    <span class="please-register please-register-catalog">Для добавления в корзину, пожалуйста <a href="/registration">зарегестрирутесь!</a></span>
        <div class="container">
                <div class="filter-price">
                <div class="filter-price__wrapper">
                Сортировка цены по:
                <button class="catalog-sort-asc active"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></i></button>
                <button class="catalog-sort-desc"><i class="fa fa-long-arrow-down" aria-hidden="true"></i></i></button>
                </div>
                <form class="filter-input__form" action="" method="get">
                <input class="filter-input" type="text" placeholder="Искать здесь...">
                <button class="filter-input__btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
                </div>
        <div class="products-content grid-container">
        <ul class="product-grid">
        </ul>
        </div>
    </div>
</section>
`;

export default template;