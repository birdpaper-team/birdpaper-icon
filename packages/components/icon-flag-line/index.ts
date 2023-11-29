import type { App } from 'vue';
import _IconFlagLine from './icon-flag-line.vue';

const IconFlagLine = Object.assign(_IconFlagLine, {
  install: (app: App) => {
    app.component(_IconFlagLine.name, _IconFlagLine);
  }
});

export default IconFlagLine;