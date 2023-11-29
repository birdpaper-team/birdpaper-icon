import type { App } from 'vue';
import _IconDeleteBackFill from './icon-delete-back-fill.vue';

const IconDeleteBackFill = Object.assign(_IconDeleteBackFill, {
  install: (app: App) => {
    app.component(_IconDeleteBackFill.name, _IconDeleteBackFill);
  }
});

export default IconDeleteBackFill;