import type { App } from 'vue';
import _IconCircleFill from './icon-circle-fill.vue';

const IconCircleFill = Object.assign(_IconCircleFill, {
  install: (app: App) => {
    app.component(_IconCircleFill.name, _IconCircleFill);
  }
});

export default IconCircleFill;