import { IComponentOptions, IController } from 'angular';

export const Dashboard: IComponentOptions = {
  bindings: {

  },
  controller: class implements IController {
    public readonly name = 'OpenShift';

    public $onInit() {

    }
  },
  template: `
    <div style="display: flex;">
      <tile name="$ctrl.name"></tile>
    </div>
  `
};
