import type { App } from 'vue';
import _IconVolumeMute from './icon-volume-mute.vue';

const IconVolumeMute = Object.assign(_IconVolumeMute, {
  install: (app: App) => {
    app.component(_IconVolumeMute.name, _IconVolumeMute);
  }
});

export default IconVolumeMute;