import type { App } from 'vue';
import _IconFileEditFill from './icon-file-edit-fill.vue';

const IconFileEditFill = Object.assign(_IconFileEditFill, {
  install: (app: App) => {
    app.component(_IconFileEditFill.name, _IconFileEditFill);
  }
});

export default IconFileEditFill;