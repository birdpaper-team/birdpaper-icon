import type { App } from 'vue';
import _IconCodeComputer from './icon-code-computer.vue';

const IconCodeComputer = Object.assign(_IconCodeComputer, {
  install: (app: App) => {
    app.component(_IconCodeComputer.name, _IconCodeComputer);
  }
});

export default IconCodeComputer;