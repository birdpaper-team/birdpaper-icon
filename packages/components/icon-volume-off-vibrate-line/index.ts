import type { App } from 'vue';
import _IconVolumeOffVibrateLine from './icon-volume-off-vibrate-line.vue';

const IconVolumeOffVibrateLine = Object.assign(_IconVolumeOffVibrateLine, {
  install: (app: App) => {
    app.component(_IconVolumeOffVibrateLine.name, _IconVolumeOffVibrateLine);
  }
});

export default IconVolumeOffVibrateLine;