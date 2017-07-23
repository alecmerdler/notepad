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
        console.log("I'm alive!");
        this.render();
    }

    public render(): string {
        let template: string = `
            <h1>Hello World!</h1>
            <input type="text">
        `;

        return template;
    }
}
