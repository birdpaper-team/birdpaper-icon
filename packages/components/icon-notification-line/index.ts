import type { App } from 'vue';
import _IconNotificationLine from './icon-notification-line.vue';

const IconNotificationLine = Object.assign(_IconNotificationLine, {
  install: (app: App) => {
    app.component(_IconNotificationLine.name, _IconNotificationLine);
  }
});

export default IconNotificationLine;