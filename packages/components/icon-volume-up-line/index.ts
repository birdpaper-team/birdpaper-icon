import type { App } from 'vue';
import _IconVolumeUpLine from './icon-volume-up-line.vue';

const IconVolumeUpLine = Object.assign(_IconVolumeUpLine, {
  install: (app: App) => {
    app.component(_IconVolumeUpLine.name, _IconVolumeUpLine);
  }
});

export default IconVolumeUpLine;