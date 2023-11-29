import type { App } from 'vue';
import _IconHardDrive3Line from './icon-hard-drive-3-line.vue';

const IconHardDrive3Line = Object.assign(_IconHardDrive3Line, {
  install: (app: App) => {
    app.component(_IconHardDrive3Line.name, _IconHardDrive3Line);
  }
});

export default IconHardDrive3Line;