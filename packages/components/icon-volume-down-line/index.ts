import type { App } from 'vue';
import _IconVolumeDownLine from './icon-volume-down-line.vue';

const IconVolumeDownLine = Object.assign(_IconVolumeDownLine, {
  install: (app: App) => {
    app.component(_IconVolumeDownLine.name, _IconVolumeDownLine);
  }
});

export default IconVolumeDownLine;