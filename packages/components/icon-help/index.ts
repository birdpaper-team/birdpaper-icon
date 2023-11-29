import type { App } from 'vue';
import _IconHelp from './icon-help.vue';

const IconHelp = Object.assign(_IconHelp, {
  install: (app: App) => {
    app.component(_IconHelp.name, _IconHelp);
  }
});

export default IconHelp;