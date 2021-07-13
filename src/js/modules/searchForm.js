export default class SearchForm {
    constructor(app, element) {
        this.root = app;
        this.element = element;

        this.handleClick = this.handleClick.bind(this);
        this.element.addEventListener('click', this.handleClick);
    }

    handleClick(e) {
        const target = e.target;

        switch (true) {
            case ('action' in target.dataset && target.getAttribute('data-action') === 'CLOSE_SEARCH'):
                this.element.classList.remove('search-form--active')
                break;
            default:
                break;
        }
    }
}

