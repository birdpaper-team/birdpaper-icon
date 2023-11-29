import type { App } from 'vue';
import _IconVolumeOffVibrateFill from './icon-volume-off-vibrate-fill.vue';

const IconVolumeOffVibrateFill = Object.assign(_IconVolumeOffVibrateFill, {
  install: (app: App) => {
    app.component(_IconVolumeOffVibrateFill.name, _IconVolumeOffVibrateFill);
  }
});

export default IconVolumeOffVibrateFill;