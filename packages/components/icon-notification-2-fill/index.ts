import type { App } from 'vue';
import _IconNotification2Fill from './icon-notification-2-fill.vue';

const IconNotification2Fill = Object.assign(_IconNotification2Fill, {
  install: (app: App) => {
    app.component(_IconNotification2Fill.name, _IconNotification2Fill);
  }
});

export default IconNotification2Fill;