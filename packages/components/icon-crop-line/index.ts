import type { App } from 'vue';
import _IconCropLine from './icon-crop-line.vue';

const IconCropLine = Object.assign(_IconCropLine, {
  install: (app: App) => {
    app.component(_IconCropLine.name, _IconCropLine);
  }
});

export default IconCropLine;