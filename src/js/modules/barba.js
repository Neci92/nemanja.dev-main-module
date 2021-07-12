
import barba from '@barba/core';

export default class BarbaModule {
    constructor(app, element) {
        this.root = app;
        this.element = element;

        barba.init({
            // ...
        });
    }
}

