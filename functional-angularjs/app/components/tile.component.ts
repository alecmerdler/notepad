import { IComponentOptions, IController } from 'angular';

export const Tile: IComponentOptions = {
  bindings: {
    name: '<',
  },
  controller: class implements IController {
    public name = 'Alec';
    
    constructor() {
      console.log(this.name)
    }
  },
  template: `
    <div style="display: flex;">
      <h1>Name: {{$ctrl.name}}</h1>
    </div>
  `,
};
