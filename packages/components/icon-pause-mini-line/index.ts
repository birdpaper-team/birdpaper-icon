import type { App } from 'vue';
import _IconPauseMiniLine from './icon-pause-mini-line.vue';

const IconPauseMiniLine = Object.assign(_IconPauseMiniLine, {
  install: (app: App) => {
    app.component(_IconPauseMiniLine.name, _IconPauseMiniLine);
  }
});

export default IconPauseMiniLine;