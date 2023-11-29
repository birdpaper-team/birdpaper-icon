import type { App } from 'vue';
import _IconNotificationOffFill from './icon-notification-off-fill.vue';

const IconNotificationOffFill = Object.assign(_IconNotificationOffFill, {
  install: (app: App) => {
    app.component(_IconNotificationOffFill.name, _IconNotificationOffFill);
  }
});

export default IconNotificationOffFill;