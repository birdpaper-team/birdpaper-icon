import type { App } from 'vue';
import _IconTiktokLine from './icon-tiktok-line.vue';

const IconTiktokLine = Object.assign(_IconTiktokLine, {
  install: (app: App) => {
    app.component(_IconTiktokLine.name, _IconTiktokLine);
  }
});

export default IconTiktokLine;