
import barba from '@barba/core';

export default class BarbaModule {
    root;
    element;

    constructor(app: any, element: any) {
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

