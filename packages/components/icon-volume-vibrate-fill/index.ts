import type { App } from 'vue';
import _IconVolumeVibrateFill from './icon-volume-vibrate-fill.vue';

const IconVolumeVibrateFill = Object.assign(_IconVolumeVibrateFill, {
  install: (app: App) => {
    app.component(_IconVolumeVibrateFill.name, _IconVolumeVibrateFill);
  }
});

export default IconVolumeVibrateFill;