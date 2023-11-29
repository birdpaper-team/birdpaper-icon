import type { App } from 'vue';
import _IconNotification4Line from './icon-notification-4-line.vue';

const IconNotification4Line = Object.assign(_IconNotification4Line, {
  install: (app: App) => {
    app.component(_IconNotification4Line.name, _IconNotification4Line);
  }
});

export default IconNotification4Line;