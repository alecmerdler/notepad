import { Component } from './decorators/component';


@Component({
    selector: 'my-app',
})
class AppComponent extends HTMLElement {

    public connectedCallback(): void {
        console.log("I'm alive!");
    }
}
