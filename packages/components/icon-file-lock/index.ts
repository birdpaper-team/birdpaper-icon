import type { App } from 'vue';
import _IconFileLock from './icon-file-lock.vue';

const IconFileLock = Object.assign(_IconFileLock, {
  install: (app: App) => {
    app.component(_IconFileLock.name, _IconFileLock);
  }
});

export default IconFileLock;