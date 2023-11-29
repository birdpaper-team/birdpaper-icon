import type { App } from 'vue';
import _IconCrop2Line from './icon-crop-2-line.vue';

const IconCrop2Line = Object.assign(_IconCrop2Line, {
  install: (app: App) => {
    app.component(_IconCrop2Line.name, _IconCrop2Line);
  }
});

export default IconCrop2Line;