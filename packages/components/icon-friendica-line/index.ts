import type { App } from 'vue';
import _IconFriendicaLine from './icon-friendica-line.vue';

const IconFriendicaLine = Object.assign(_IconFriendicaLine, {
  install: (app: App) => {
    app.component(_IconFriendicaLine.name, _IconFriendicaLine);
  }
});

export default IconFriendicaLine;