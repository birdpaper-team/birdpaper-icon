import type { App } from 'vue';
import _IconHardDriveLine from './icon-hard-drive-line.vue';

const IconHardDriveLine = Object.assign(_IconHardDriveLine, {
  install: (app: App) => {
    app.component(_IconHardDriveLine.name, _IconHardDriveLine);
  }
});

export default IconHardDriveLine;