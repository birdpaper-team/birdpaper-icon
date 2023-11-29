import type { App } from 'vue';
import _IconSlowDownLine from './icon-slow-down-line.vue';

const IconSlowDownLine = Object.assign(_IconSlowDownLine, {
  install: (app: App) => {
    app.component(_IconSlowDownLine.name, _IconSlowDownLine);
  }
});

export default IconSlowDownLine;