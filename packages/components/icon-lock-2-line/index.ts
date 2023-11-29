import type { App } from 'vue';
import _IconLock2Line from './icon-lock-2-line.vue';

const IconLock2Line = Object.assign(_IconLock2Line, {
  install: (app: App) => {
    app.component(_IconLock2Line.name, _IconLock2Line);
  }
});

export default IconLock2Line;