import type { App } from 'vue';
import _IconDisabledComputer from './icon-disabled-computer.vue';

const IconDisabledComputer = Object.assign(_IconDisabledComputer, {
  install: (app: App) => {
    app.component(_IconDisabledComputer.name, _IconDisabledComputer);
  }
});

export default IconDisabledComputer;