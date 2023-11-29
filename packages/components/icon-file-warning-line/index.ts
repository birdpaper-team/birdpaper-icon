import type { App } from 'vue';
import _IconFileWarningLine from './icon-file-warning-line.vue';

const IconFileWarningLine = Object.assign(_IconFileWarningLine, {
  install: (app: App) => {
    app.component(_IconFileWarningLine.name, _IconFileWarningLine);
  }
});

export default IconFileWarningLine;