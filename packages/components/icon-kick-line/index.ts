import type { App } from 'vue';
import _IconKickLine from './icon-kick-line.vue';

const IconKickLine = Object.assign(_IconKickLine, {
  install: (app: App) => {
    app.component(_IconKickLine.name, _IconKickLine);
  }
});

export default IconKickLine;