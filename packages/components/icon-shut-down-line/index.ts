import type { App } from 'vue';
import _IconShutDownLine from './icon-shut-down-line.vue';

const IconShutDownLine = Object.assign(_IconShutDownLine, {
  install: (app: App) => {
    app.component(_IconShutDownLine.name, _IconShutDownLine);
  }
});

export default IconShutDownLine;