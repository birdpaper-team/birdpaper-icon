import type { App } from 'vue';
import _IconDriveLine from './icon-drive-line.vue';

const IconDriveLine = Object.assign(_IconDriveLine, {
  install: (app: App) => {
    app.component(_IconDriveLine.name, _IconDriveLine);
  }
});

export default IconDriveLine;