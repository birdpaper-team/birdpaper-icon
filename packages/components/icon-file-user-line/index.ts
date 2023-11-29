import type { App } from 'vue';
import _IconFileUserLine from './icon-file-user-line.vue';

const IconFileUserLine = Object.assign(_IconFileUserLine, {
  install: (app: App) => {
    app.component(_IconFileUserLine.name, _IconFileUserLine);
  }
});

export default IconFileUserLine;