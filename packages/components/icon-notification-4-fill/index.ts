import type { App } from 'vue';
import _IconNotification4Fill from './icon-notification-4-fill.vue';

const IconNotification4Fill = Object.assign(_IconNotification4Fill, {
  install: (app: App) => {
    app.component(_IconNotification4Fill.name, _IconNotification4Fill);
  }
});

export default IconNotification4Fill;