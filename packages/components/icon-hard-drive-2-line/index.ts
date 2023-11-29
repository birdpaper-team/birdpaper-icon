import type { App } from 'vue';
import _IconHardDrive2Line from './icon-hard-drive-2-line.vue';

const IconHardDrive2Line = Object.assign(_IconHardDrive2Line, {
  install: (app: App) => {
    app.component(_IconHardDrive2Line.name, _IconHardDrive2Line);
  }
});

export default IconHardDrive2Line;