import type { App } from 'vue';
import _IconMailOpenFill from './icon-mail-open-fill.vue';

const IconMailOpenFill = Object.assign(_IconMailOpenFill, {
  install: (app: App) => {
    app.component(_IconMailOpenFill.name, _IconMailOpenFill);
  }
});

export default IconMailOpenFill;