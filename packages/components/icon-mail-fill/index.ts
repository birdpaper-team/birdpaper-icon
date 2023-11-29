import type { App } from 'vue';
import _IconMailFill from './icon-mail-fill.vue';

const IconMailFill = Object.assign(_IconMailFill, {
  install: (app: App) => {
    app.component(_IconMailFill.name, _IconMailFill);
  }
});

export default IconMailFill;