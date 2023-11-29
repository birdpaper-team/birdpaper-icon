import type { App } from 'vue';
import _IconNotificationBadgeFill from './icon-notification-badge-fill.vue';

const IconNotificationBadgeFill = Object.assign(_IconNotificationBadgeFill, {
  install: (app: App) => {
    app.component(_IconNotificationBadgeFill.name, _IconNotificationBadgeFill);
  }
});

export default IconNotificationBadgeFill;