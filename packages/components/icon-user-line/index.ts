import type { App } from 'vue';
import _IconUserLine from './icon-user-line.vue';

const IconUserLine = Object.assign(_IconUserLine, {
  install: (app: App) => {
    app.component(_IconUserLine.name, _IconUserLine);
  }
});

export default IconUserLine;