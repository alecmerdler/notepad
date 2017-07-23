/**
 * Type representing web component data.
 */
export type ComponentData = {
    selector: string;
};


/**
 * Class decorator that registers the class as a web component using the given component data.
 */
export function Component(componentData: ComponentData) {
    if (componentData.selector.indexOf('-') == -1) {
        throw new Error('Selector must contain a "-"');
    }

    return (constructor: Function) => {
        // Register custom element
        window.customElements.define(componentData.selector, constructor);

        // Initialize shadow root template
        // FIXME: Throws 'Illegal invocation' error
        // constructor.prototype.attachShadow({mode: 'open'});

        // Intercept 'render' method
        const originalRenderFn: RenderFn = constructor.prototype.render;
        constructor.prototype.render = () => {
            const template: string = originalRenderFn();

            // FIXME: Setting all matching elements' 'innerHTML' instead of shadow DOM
            (<any>window.document.querySelectorAll(componentData.selector)).forEach((elem) => {
                elem.innerHTML = originalRenderFn();
            });

            return template;
        };
    }
}


type RenderFn = () => string;
