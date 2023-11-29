import type { App } from 'vue';
import _IconHomeHeartLine from './icon-home-heart-line.vue';

const IconHomeHeartLine = Object.assign(_IconHomeHeartLine, {
  install: (app: App) => {
    app.component(_IconHomeHeartLine.name, _IconHomeHeartLine);
  }
});

export default IconHomeHeartLine;