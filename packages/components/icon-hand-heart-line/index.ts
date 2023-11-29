import type { App } from 'vue';
import _IconHandHeartLine from './icon-hand-heart-line.vue';

const IconHandHeartLine = Object.assign(_IconHandHeartLine, {
  install: (app: App) => {
    app.component(_IconHandHeartLine.name, _IconHandHeartLine);
  }
});

export default IconHandHeartLine;