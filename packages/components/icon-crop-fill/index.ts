import type { App } from 'vue';
import _IconCropFill from './icon-crop-fill.vue';

const IconCropFill = Object.assign(_IconCropFill, {
  install: (app: App) => {
    app.component(_IconCropFill.name, _IconCropFill);
  }
});

export default IconCropFill;