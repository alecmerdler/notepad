export interface OnConnect {
    connectedCallback: () => void;
}


export interface OnDisconnect {
    disconnectedCallback: () => void;
}


export interface OnChange {
    attributeChangedCallback: (attrName: string, oldVal: any, newVal: any) => void;
}


export interface OnAdopt {
    adoptedCallback: () => void;
}
