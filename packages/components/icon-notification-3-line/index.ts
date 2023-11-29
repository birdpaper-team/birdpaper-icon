import type { App } from 'vue';
import _IconNotification3Line from './icon-notification-3-line.vue';

const IconNotification3Line = Object.assign(_IconNotification3Line, {
  install: (app: App) => {
    app.component(_IconNotification3Line.name, _IconNotification3Line);
  }
});

export default IconNotification3Line;