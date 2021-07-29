export default class Navigation {
    root;
    element;
    searchForm: any;

    constructor(app: any, element: any) {
        this.root = app;
        this.element = element;

        this.handleClick = this.handleClick.bind(this);
        this.element.addEventListener('click', this.handleClick);

        this.searchForm = document.querySelector('.search-form');
    }

    handleClick(e: any) {
        const target = e.target;

        switch (true) {
            case ('action' in target.dataset && target.getAttribute('data-action') === 'TOGGLE_SEARCH'):
                this.root.emitEvent({
                    name: 'TOGGLE_SEARCH',
                    payload: {}
                });
                break;
            default:
                break;
        }
    }
}

