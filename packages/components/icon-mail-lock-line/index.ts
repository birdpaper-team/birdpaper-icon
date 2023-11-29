import type { App } from 'vue';
import _IconMailLockLine from './icon-mail-lock-line.vue';

const IconMailLockLine = Object.assign(_IconMailLockLine, {
  install: (app: App) => {
    app.component(_IconMailLockLine.name, _IconMailLockLine);
  }
});

export default IconMailLockLine;