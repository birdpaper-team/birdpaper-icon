import type { App } from 'vue';
import _IconFill from './icon-fill.vue';

const IconFill = Object.assign(_IconFill, {
  install: (app: App) => {
    app.component(_IconFill.name, _IconFill);
  }
});

export default IconFill;