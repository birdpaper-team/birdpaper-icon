import type { App } from 'vue';
import _IconLock from './icon-lock.vue';

const IconLock = Object.assign(_IconLock, {
  install: (app: App) => {
    app.component(_IconLock.name, _IconLock);
  }
});

export default IconLock;