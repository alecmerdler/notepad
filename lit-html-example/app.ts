import { html, render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';

// FIXME: `style-loader` makes this return an empty object
import * as styles from './app.css';

export type Connect = (store: any) => <P extends ConnectProps>(component: Component<P>) => WrappedComponent<Omit<P, "dispatch">>
export const connect: Connect = (store) => (component) => {
  // FIXME: Replace `as any` with proper type
  return (props) => component(Object.assign({}, store, props, {dispatch: initialize}) as any);
};

export const App: Component<AppProps> = (props) => {
  const onClick = () => {
    console.log(props.name);
    props.dispatch({name: 'Alec'});
  };

  console.log(styles);

  return html`<div class="${styles['.lit-app']}">
    <button onclick="${onClick}">Engage</button>
    <div>
      ${props.name ? props.name.toUpperCase() : 'Unknown'}
    </div>
  </div>`;
};

// FIXME: Global store :(
const store = {};
const initialize = (values: any) => render(connect(store)(App)(values), document.getElementById('app'));
initialize(store);

type Component<P = {}> = (props: P) => TemplateResult;
type WrappedComponent<P = {}> = (props: P) => TemplateResult;
type ConnectProps = {dispatch: (newStore: any) => void};

type AppProps = {
  name: string;
  dispatch: (newStore: any) => void;
};

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
declare type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
