import type { App } from 'vue';
import _IconCommandFill from './icon-command-fill.vue';

const IconCommandFill = Object.assign(_IconCommandFill, {
  install: (app: App) => {
    app.component(_IconCommandFill.name, _IconCommandFill);
  }
});

export default IconCommandFill;