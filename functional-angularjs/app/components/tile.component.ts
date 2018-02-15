import { IComponentOptions, IControllerConstructor } from 'angular';


export type Connect = (ctrl: (props: any) => void) => IControllerConstructor;
export const connect: Connect = ctrl => function() {
  ctrl({});
};

export const Tile: IComponentOptions = {
  bindings: {
    name: '<',
  },
  controller: connect((props) => {
    console.log(props.name)
  }),
  template: `
    <div>
      <h1>Name: {{ $ctrl.name }}</h1>
    </div>
  `,
};
