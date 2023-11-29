import type { App } from 'vue';
import _IconDriveFill from './icon-drive-fill.vue';

const IconDriveFill = Object.assign(_IconDriveFill, {
  install: (app: App) => {
    app.component(_IconDriveFill.name, _IconDriveFill);
  }
});

export default IconDriveFill;