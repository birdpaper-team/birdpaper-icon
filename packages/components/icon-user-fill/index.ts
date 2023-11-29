import type { App } from 'vue';
import _IconUserFill from './icon-user-fill.vue';

const IconUserFill = Object.assign(_IconUserFill, {
  install: (app: App) => {
    app.component(_IconUserFill.name, _IconUserFill);
  }
});

export default IconUserFill;