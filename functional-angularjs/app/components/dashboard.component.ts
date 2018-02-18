import { IComponentOptions, IController } from 'angular';

export const Dashboard: IComponentOptions = {
  bindings: {

  },
  controller: class Controller implements IController {
    public readonly name: string;
    constructor() {
      this.name = 'OpenShift';
    }
  },
  template: `
    <div style="display: flex;">
      <tile name="$ctrl.name"></tile>
    </div>
  `
};
