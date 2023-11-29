import type { App } from 'vue';
import _IconErrorComputer from './icon-error-computer.vue';

const IconErrorComputer = Object.assign(_IconErrorComputer, {
  install: (app: App) => {
    app.component(_IconErrorComputer.name, _IconErrorComputer);
  }
});

export default IconErrorComputer;