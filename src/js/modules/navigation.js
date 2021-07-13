export default class Navigation {
    constructor(app, element) {
        this.root = app;
        this.element = element;

        this.handleClick = this.handleClick.bind(this);
        this.element.addEventListener('click', this.handleClick);

        this.searchForm = document.querySelector('.search-form');
    }

    handleClick(e) {
        const target = e.target;

        switch (true) {
            case ('action' in target.dataset && target.getAttribute('data-action') === 'TOGGLE_SEARCH'):
                this.searchForm.classList.toggle('search-form--active');
                if (this.searchForm.classList.contains('search-form--active')) {
                    this.searchForm.querySelector('input').focus();
                }
                break;
            default:
                break;
        }
    }
}

