import type { App } from 'vue';
import _IconUserHeartLine from './icon-user-heart-line.vue';

const IconUserHeartLine = Object.assign(_IconUserHeartLine, {
  install: (app: App) => {
    app.component(_IconUserHeartLine.name, _IconUserHeartLine);
  }
});

export default IconUserHeartLine;