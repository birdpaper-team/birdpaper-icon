import type { App } from 'vue';
import _IconUnlock from './icon-unlock.vue';

const IconUnlock = Object.assign(_IconUnlock, {
  install: (app: App) => {
    app.component(_IconUnlock.name, _IconUnlock);
  }
});

export default IconUnlock;