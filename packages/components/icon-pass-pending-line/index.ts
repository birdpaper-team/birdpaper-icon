import type { App } from 'vue';
import _IconPassPendingLine from './icon-pass-pending-line.vue';

const IconPassPendingLine = Object.assign(_IconPassPendingLine, {
  install: (app: App) => {
    app.component(_IconPassPendingLine.name, _IconPassPendingLine);
  }
});

export default IconPassPendingLine;