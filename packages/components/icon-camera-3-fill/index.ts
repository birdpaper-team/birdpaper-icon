import type { App } from 'vue';
import _IconCamera3Fill from './icon-camera-3-fill.vue';

const IconCamera3Fill = Object.assign(_IconCamera3Fill, {
  install: (app: App) => {
    app.component(_IconCamera3Fill.name, _IconCamera3Fill);
  }
});

export default IconCamera3Fill;