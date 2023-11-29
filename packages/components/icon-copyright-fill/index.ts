import type { App } from 'vue';
import _IconCopyrightFill from './icon-copyright-fill.vue';

const IconCopyrightFill = Object.assign(_IconCopyrightFill, {
  install: (app: App) => {
    app.component(_IconCopyrightFill.name, _IconCopyrightFill);
  }
});

export default IconCopyrightFill;