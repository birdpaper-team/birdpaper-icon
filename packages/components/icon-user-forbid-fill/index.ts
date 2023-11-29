import type { App } from 'vue';
import _IconUserForbidFill from './icon-user-forbid-fill.vue';

const IconUserForbidFill = Object.assign(_IconUserForbidFill, {
  install: (app: App) => {
    app.component(_IconUserForbidFill.name, _IconUserForbidFill);
  }
});

export default IconUserForbidFill;