import { IComponentOptions, IController } from 'angular';
import { html, render } from 'lit-html';

export const Dashboard: IComponentOptions = {
  bindings: {

  },
  controller: class Controller implements IController {
    private readonly name = 'OpenShift';
  },
  template: `
    <div style="display: flex;">
      <tile name="$ctrl.appName"></tile>
    </div>
  `
};

// TODO(alecmerdler): This is what I want to write:
export const DashboardSFC = (props: DashboardSFCProps) => {
  const title = props.appName.toUpperCase();

  return html`
    <div style="display: flex;">
      <tile name="${title}"></tile>
    </div>
  `
};

export type DashboardSFCProps = {
  appName: string;
};
