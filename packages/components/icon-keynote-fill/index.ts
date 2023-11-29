import type { App } from 'vue';
import _IconKeynoteFill from './icon-keynote-fill.vue';

const IconKeynoteFill = Object.assign(_IconKeynoteFill, {
  install: (app: App) => {
    app.component(_IconKeynoteFill.name, _IconKeynoteFill);
  }
});

export default IconKeynoteFill;