import type { App } from 'vue';
import _IconPayCodeTwo from './icon-pay-code-two.vue';

const IconPayCodeTwo = Object.assign(_IconPayCodeTwo, {
  install: (app: App) => {
    app.component(_IconPayCodeTwo.name, _IconPayCodeTwo);
  }
});

export default IconPayCodeTwo;