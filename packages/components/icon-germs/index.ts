import type { App } from 'vue';
import _IconGerms from './icon-germs.vue';

const IconGerms = Object.assign(_IconGerms, {
  install: (app: App) => {
    app.component(_IconGerms.name, _IconGerms);
  }
});

export default IconGerms;