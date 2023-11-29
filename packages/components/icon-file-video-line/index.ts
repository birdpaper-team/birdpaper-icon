import type { App } from 'vue';
import _IconFileVideoLine from './icon-file-video-line.vue';

const IconFileVideoLine = Object.assign(_IconFileVideoLine, {
  install: (app: App) => {
    app.component(_IconFileVideoLine.name, _IconFileVideoLine);
  }
});

export default IconFileVideoLine;