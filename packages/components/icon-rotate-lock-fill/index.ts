import type { App } from 'vue';
import _IconRotateLockFill from './icon-rotate-lock-fill.vue';

const IconRotateLockFill = Object.assign(_IconRotateLockFill, {
  install: (app: App) => {
    app.component(_IconRotateLockFill.name, _IconRotateLockFill);
  }
});

export default IconRotateLockFill;