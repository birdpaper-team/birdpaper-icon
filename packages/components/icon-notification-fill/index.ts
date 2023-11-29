import type { App } from 'vue';
import _IconNotificationFill from './icon-notification-fill.vue';

const IconNotificationFill = Object.assign(_IconNotificationFill, {
  install: (app: App) => {
    app.component(_IconNotificationFill.name, _IconNotificationFill);
  }
});

export default IconNotificationFill;