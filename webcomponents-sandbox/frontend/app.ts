import { Component } from './decorators/component';
import { OnConnect } from './interfaces/index';


@Component({
    selector: 'my-app',
})
class AppComponent extends HTMLElement implements OnConnect {

    constructor() {
        super();
    }

    public connectedCallback(): void {
        this.render();
    }

    public render(): string {
        return `
            <h1>Hello World!</h1>
            <input type="text">
        `;
    }
}
