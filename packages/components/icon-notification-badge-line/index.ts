import type { App } from 'vue';
import _IconNotificationBadgeLine from './icon-notification-badge-line.vue';

const IconNotificationBadgeLine = Object.assign(_IconNotificationBadgeLine, {
  install: (app: App) => {
    app.component(_IconNotificationBadgeLine.name, _IconNotificationBadgeLine);
  }
});

export default IconNotificationBadgeLine;