function sortedCatalogApp() {

    const buttons = document.querySelectorAll('.catalogbtn');
    const products = document.querySelectorAll('.product-grid__item');
    const btnSortAsc = document.querySelector('.catalog-sort-asc');
    const btnSortDesc = document.querySelector('.catalog-sort-desc');

    function sortList(sortType) {
        let items = document.getElementById('products');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }

    function sortListDesc(sortType) {
        let items = document.getElementById('products');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }

    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, products);
        })
    })

    btnSortAsc.onclick = function () {
        sortList('data-price');
        btnSortAsc.classList.add('active');
        btnSortDesc.classList.remove('active');
    }

    btnSortDesc.onclick = function () {
        sortListDesc('data-price');
        btnSortDesc.classList.add('active');
        btnSortAsc.classList.remove('active');
    }
}

export function filter(category, items) {
    items.forEach((item) => {
        const productId = item.dataset.filter;
        const isItemFilter = !productId.includes(category);
        const isShowAll = category.toLowerCase() === 'all'
        if (isItemFilter && !isShowAll) {
            item.classList.add('hide')
        } else {
            item.classList.remove('hide')
        }
    })
}
export default sortedCatalogApp;



