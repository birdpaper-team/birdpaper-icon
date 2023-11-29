import type { App } from 'vue';
import _IconVolumeUpFill from './icon-volume-up-fill.vue';

const IconVolumeUpFill = Object.assign(_IconVolumeUpFill, {
  install: (app: App) => {
    app.component(_IconVolumeUpFill.name, _IconVolumeUpFill);
  }
});

export default IconVolumeUpFill;