import type { App } from 'vue';
import _IconAddComputer from './icon-add-computer.vue';

const IconAddComputer = Object.assign(_IconAddComputer, {
  install: (app: App) => {
    app.component(_IconAddComputer.name, _IconAddComputer);
  }
});

export default IconAddComputer;