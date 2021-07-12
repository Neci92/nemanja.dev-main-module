
import barba from '@barba/core';

export default class BarbaModule {
    constructor(app, element) {
        this.root = app;
        this.element = element;

        barba.init({
            // ...
        });

        barba.hooks.enter(() => {
            window.scrollTo(0, 0);
        });
    }
}

