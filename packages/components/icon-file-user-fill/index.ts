import type { App } from 'vue';
import _IconFileUserFill from './icon-file-user-fill.vue';

const IconFileUserFill = Object.assign(_IconFileUserFill, {
  install: (app: App) => {
    app.component(_IconFileUserFill.name, _IconFileUserFill);
  }
});

export default IconFileUserFill;