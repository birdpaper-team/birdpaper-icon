import type { App } from 'vue';
import _IconMessageLine from './icon-message-line.vue';

const IconMessageLine = Object.assign(_IconMessageLine, {
  install: (app: App) => {
    app.component(_IconMessageLine.name, _IconMessageLine);
  }
});

export default IconMessageLine;