import type { App } from 'vue';
import _IconHardDrive2Fill from './icon-hard-drive-2-fill.vue';

const IconHardDrive2Fill = Object.assign(_IconHardDrive2Fill, {
  install: (app: App) => {
    app.component(_IconHardDrive2Fill.name, _IconHardDrive2Fill);
  }
});

export default IconHardDrive2Fill;