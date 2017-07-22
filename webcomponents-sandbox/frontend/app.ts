import { Component } from './decorators/component';


@Component({
    selector: 'my-app',
})
class AppComponent extends HTMLElement {

    constructor() {
        super();
    }

    public connectedCallback(): void {

    }
}
