import type { App } from 'vue';
import _IconPassExpiredLine from './icon-pass-expired-line.vue';

const IconPassExpiredLine = Object.assign(_IconPassExpiredLine, {
  install: (app: App) => {
    app.component(_IconPassExpiredLine.name, _IconPassExpiredLine);
  }
});

export default IconPassExpiredLine;