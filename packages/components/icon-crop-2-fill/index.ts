import type { App } from 'vue';
import _IconCrop2Fill from './icon-crop-2-fill.vue';

const IconCrop2Fill = Object.assign(_IconCrop2Fill, {
  install: (app: App) => {
    app.component(_IconCrop2Fill.name, _IconCrop2Fill);
  }
});

export default IconCrop2Fill;