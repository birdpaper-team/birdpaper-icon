import type { App } from 'vue';
import _IconVolumeMuteFill from './icon-volume-mute-fill.vue';

const IconVolumeMuteFill = Object.assign(_IconVolumeMuteFill, {
  install: (app: App) => {
    app.component(_IconVolumeMuteFill.name, _IconVolumeMuteFill);
  }
});

export default IconVolumeMuteFill;