import type { App } from 'vue';
import _IconNotification2Line from './icon-notification-2-line.vue';

const IconNotification2Line = Object.assign(_IconNotification2Line, {
  install: (app: App) => {
    app.component(_IconNotification2Line.name, _IconNotification2Line);
  }
});

export default IconNotification2Line;