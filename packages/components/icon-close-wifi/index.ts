import type { App } from 'vue';
import _IconCloseWifi from './icon-close-wifi.vue';

const IconCloseWifi = Object.assign(_IconCloseWifi, {
  install: (app: App) => {
    app.component(_IconCloseWifi.name, _IconCloseWifi);
  }
});

export default IconCloseWifi;