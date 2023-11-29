import type { App } from 'vue';
import _IconVolumeMuteLine from './icon-volume-mute-line.vue';

const IconVolumeMuteLine = Object.assign(_IconVolumeMuteLine, {
  install: (app: App) => {
    app.component(_IconVolumeMuteLine.name, _IconVolumeMuteLine);
  }
});

export default IconVolumeMuteLine;