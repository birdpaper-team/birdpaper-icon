import type { App } from 'vue';
import _IconImageEditFill from './icon-image-edit-fill.vue';

const IconImageEditFill = Object.assign(_IconImageEditFill, {
  install: (app: App) => {
    app.component(_IconImageEditFill.name, _IconImageEditFill);
  }
});

export default IconImageEditFill;