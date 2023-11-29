import type { App } from 'vue';
import _IconEmailLock from './icon-email-lock.vue';

const IconEmailLock = Object.assign(_IconEmailLock, {
  install: (app: App) => {
    app.component(_IconEmailLock.name, _IconEmailLock);
  }
});

export default IconEmailLock;