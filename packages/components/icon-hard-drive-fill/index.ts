import type { App } from 'vue';
import _IconHardDriveFill from './icon-hard-drive-fill.vue';

const IconHardDriveFill = Object.assign(_IconHardDriveFill, {
  install: (app: App) => {
    app.component(_IconHardDriveFill.name, _IconHardDriveFill);
  }
});

export default IconHardDriveFill;