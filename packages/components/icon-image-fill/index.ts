import type { App } from 'vue';
import _IconImageFill from './icon-image-fill.vue';

const IconImageFill = Object.assign(_IconImageFill, {
  install: (app: App) => {
    app.component(_IconImageFill.name, _IconImageFill);
  }
});

export default IconImageFill;