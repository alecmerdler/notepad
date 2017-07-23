import { Component } from '../decorators/component';
import { OnChange, OnConnect } from '../interfaces/index';


@Component({
    selector: 'my-navbar',
})
export class NavbarComponent extends HTMLElement implements OnConnect, OnChange {

    static get observedAttributes() {
        return ['title', 'visible'];
    }

    public get title() {
        console.log(this.getAttribute('title'));
        return this.getAttribute('title');
    }

    public set title(val: string) {
        this.setAttribute('title', val);
    }

    public get visible(): boolean {
        return this.hasAttribute('visible');
    }

    public set visible(val: boolean) {
        if (val) {
            this.setAttribute('visible', '');
        } else {
            this.removeAttribute('visible');
        }
    }

    public connectedCallback(): void {
        this.render();
    }

    public attributeChangedCallback(attrName: string, oldVal: any, newVal: any) {
        console.log(`${attrName} changed from ${oldVal} to ${newVal}`);

        this.render();
    }

    // FIXME: References to `this` return undefined because of the @Component decorator overriding `render()` method
    public render(): string {
        // this.title = "My App";
        console.log(this.hasAttribute);

        return `
            <div style="width: 100%; height: 40px; display: flex; justify-content: flex-start;">
                <ul>
                    <li>${this.title}</li>
                </ul>
            </div>
        `;
    }
}
