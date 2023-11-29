import type { App } from 'vue';
import _IconHardDrive3Fill from './icon-hard-drive-3-fill.vue';

const IconHardDrive3Fill = Object.assign(_IconHardDrive3Fill, {
  install: (app: App) => {
    app.component(_IconHardDrive3Fill.name, _IconHardDrive3Fill);
  }
});

export default IconHardDrive3Fill;