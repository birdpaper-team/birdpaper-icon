import type { App } from 'vue';
import _IconFileImageFill from './icon-file-image-fill.vue';

const IconFileImageFill = Object.assign(_IconFileImageFill, {
  install: (app: App) => {
    app.component(_IconFileImageFill.name, _IconFileImageFill);
  }
});

export default IconFileImageFill;