import type { App } from 'vue';
import _IconVolumeVibrateLine from './icon-volume-vibrate-line.vue';

const IconVolumeVibrateLine = Object.assign(_IconVolumeVibrateLine, {
  install: (app: App) => {
    app.component(_IconVolumeVibrateLine.name, _IconVolumeVibrateLine);
  }
});

export default IconVolumeVibrateLine;