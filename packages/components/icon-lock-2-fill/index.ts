import type { App } from 'vue';
import _IconLock2Fill from './icon-lock-2-fill.vue';

const IconLock2Fill = Object.assign(_IconLock2Fill, {
  install: (app: App) => {
    app.component(_IconLock2Fill.name, _IconLock2Fill);
  }
});

export default IconLock2Fill;