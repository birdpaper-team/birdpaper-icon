import type { App } from 'vue';
import _IconNotification3Fill from './icon-notification-3-fill.vue';

const IconNotification3Fill = Object.assign(_IconNotification3Fill, {
  install: (app: App) => {
    app.component(_IconNotification3Fill.name, _IconNotification3Fill);
  }
});

export default IconNotification3Fill;