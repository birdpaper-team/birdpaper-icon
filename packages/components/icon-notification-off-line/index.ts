import type { App } from 'vue';
import _IconNotificationOffLine from './icon-notification-off-line.vue';

const IconNotificationOffLine = Object.assign(_IconNotificationOffLine, {
  install: (app: App) => {
    app.component(_IconNotificationOffLine.name, _IconNotificationOffLine);
  }
});

export default IconNotificationOffLine;