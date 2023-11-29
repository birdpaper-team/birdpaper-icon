import type { App } from 'vue';
import _IconPayCodeOne from './icon-pay-code-one.vue';

const IconPayCodeOne = Object.assign(_IconPayCodeOne, {
  install: (app: App) => {
    app.component(_IconPayCodeOne.name, _IconPayCodeOne);
  }
});

export default IconPayCodeOne;