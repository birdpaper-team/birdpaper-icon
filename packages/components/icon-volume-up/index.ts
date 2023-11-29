import type { App } from 'vue';
import _IconVolumeUp from './icon-volume-up.vue';

const IconVolumeUp = Object.assign(_IconVolumeUp, {
  install: (app: App) => {
    app.component(_IconVolumeUp.name, _IconVolumeUp);
  }
});

export default IconVolumeUp;