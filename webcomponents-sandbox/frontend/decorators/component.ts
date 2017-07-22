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

    return function(constructor: Function) {
        window.customElements.define(componentData.selector, constructor);
    }
}