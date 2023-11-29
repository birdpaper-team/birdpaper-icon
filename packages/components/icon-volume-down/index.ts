import type { App } from 'vue';
import _IconVolumeDown from './icon-volume-down.vue';

const IconVolumeDown = Object.assign(_IconVolumeDown, {
  install: (app: App) => {
    app.component(_IconVolumeDown.name, _IconVolumeDown);
  }
});

export default IconVolumeDown;