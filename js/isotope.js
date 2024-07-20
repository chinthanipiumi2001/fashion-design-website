/**
 * Easy selector helper function
 * help select dom elements quicker
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

/**
 * Easy event listener function
 * make it easier to add event listner
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
        }else{
            selectEl.addEventListener(type, listener);
        }
    }
};

// Here, we need setup the isotope
window.addEventListener('load', ()=> {
    let portfolioContainer = select('.product-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer,{
            itemSelector: '.product-item',
            layoutMode: 'fitRows',
            precentPosition: true,
            fitRows: {
                gutter: 15,
            },
        });
        let portfolioFilters = select('#product-filters li',true);

        on(
            'click',
            '#product-filters li',
            function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el){
                    el.calsslist.remove('filter.active');
                });
                this.calsslist.add('filter-active');
                portfolioIsotope.arrange({
                    filter:this.getAttribute('data-filter'),
                });
            },
            true
        );
    }
});
 