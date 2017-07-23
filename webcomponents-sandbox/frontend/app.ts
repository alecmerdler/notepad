import { Component } from './decorators/component';
import { OnConnect } from './interfaces/index';

// FIXME: Need to import component to include in bundle and use or it is removed from bundle
import { NavbarComponent } from './components/navbar';
console.log(NavbarComponent == NavbarComponent);


@Component({
    selector: 'my-app',
})
export class AppComponent extends HTMLElement implements OnConnect {

    public connectedCallback(): void {
        this.render();
    }

    public render(): string {
        return `
            <div style="display: flex; flex-direction: column;">
                <my-navbar title="'My App'"
                           visible></my-navbar>
            </div>
        `;
    }
}
