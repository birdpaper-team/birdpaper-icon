import type { App } from 'vue';
import _IconLockingWeb from './icon-locking-web.vue';

const IconLockingWeb = Object.assign(_IconLockingWeb, {
  install: (app: App) => {
    app.component(_IconLockingWeb.name, _IconLockingWeb);
  }
});

export default IconLockingWeb;