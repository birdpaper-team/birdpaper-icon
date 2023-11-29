import type { App } from 'vue';
import _IconMailCheckFill from './icon-mail-check-fill.vue';

const IconMailCheckFill = Object.assign(_IconMailCheckFill, {
  install: (app: App) => {
    app.component(_IconMailCheckFill.name, _IconMailCheckFill);
  }
});

export default IconMailCheckFill;