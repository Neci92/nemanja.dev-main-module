
export default class BlogPost {
    root;
    element;

    constructor(app: any, element: any) {
        this.root = app;
        this.element = element;

        console.log('BLOG POST');
    }
}

