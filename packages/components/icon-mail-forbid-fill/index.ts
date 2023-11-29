import type { App } from 'vue';
import _IconMailForbidFill from './icon-mail-forbid-fill.vue';

const IconMailForbidFill = Object.assign(_IconMailForbidFill, {
  install: (app: App) => {
    app.component(_IconMailForbidFill.name, _IconMailForbidFill);
  }
});

export default IconMailForbidFill;