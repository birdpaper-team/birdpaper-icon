import type { App } from 'vue';
import _IconEditCircleFill from './icon-edit-circle-fill.vue';

const IconEditCircleFill = Object.assign(_IconEditCircleFill, {
  install: (app: App) => {
    app.component(_IconEditCircleFill.name, _IconEditCircleFill);
  }
});

export default IconEditCircleFill;