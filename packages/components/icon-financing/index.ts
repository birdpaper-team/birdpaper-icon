import type { App } from 'vue';
import _IconFinancing from './icon-financing.vue';

const IconFinancing = Object.assign(_IconFinancing, {
  install: (app: App) => {
    app.component(_IconFinancing.name, _IconFinancing);
  }
});

export default IconFinancing;