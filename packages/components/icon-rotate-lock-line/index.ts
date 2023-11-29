import type { App } from 'vue';
import _IconRotateLockLine from './icon-rotate-lock-line.vue';

const IconRotateLockLine = Object.assign(_IconRotateLockLine, {
  install: (app: App) => {
    app.component(_IconRotateLockLine.name, _IconRotateLockLine);
  }
});

export default IconRotateLockLine;