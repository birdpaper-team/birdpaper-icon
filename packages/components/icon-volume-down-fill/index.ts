import type { App } from 'vue';
import _IconVolumeDownFill from './icon-volume-down-fill.vue';

const IconVolumeDownFill = Object.assign(_IconVolumeDownFill, {
  install: (app: App) => {
    app.component(_IconVolumeDownFill.name, _IconVolumeDownFill);
  }
});

export default IconVolumeDownFill;