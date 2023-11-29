import type { App } from 'vue';
import _IconEye2Fill from './icon-eye-2-fill.vue';

const IconEye2Fill = Object.assign(_IconEye2Fill, {
  install: (app: App) => {
    app.component(_IconEye2Fill.name, _IconEye2Fill);
  }
});

export default IconEye2Fill;