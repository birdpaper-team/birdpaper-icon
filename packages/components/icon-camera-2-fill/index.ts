import type { App } from 'vue';
import _IconCamera2Fill from './icon-camera-2-fill.vue';

const IconCamera2Fill = Object.assign(_IconCamera2Fill, {
  install: (app: App) => {
    app.component(_IconCamera2Fill.name, _IconCamera2Fill);
  }
});

export default IconCamera2Fill;