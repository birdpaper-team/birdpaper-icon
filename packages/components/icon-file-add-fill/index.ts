import type { App } from 'vue';
import _IconFileAddFill from './icon-file-add-fill.vue';

const IconFileAddFill = Object.assign(_IconFileAddFill, {
  install: (app: App) => {
    app.component(_IconFileAddFill.name, _IconFileAddFill);
  }
});

export default IconFileAddFill;