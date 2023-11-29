import type { App } from 'vue';
import _IconForbidFill from './icon-forbid-fill.vue';

const IconForbidFill = Object.assign(_IconForbidFill, {
  install: (app: App) => {
    app.component(_IconForbidFill.name, _IconForbidFill);
  }
});

export default IconForbidFill;