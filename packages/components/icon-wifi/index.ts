import type { App } from 'vue';
import _IconWifi from './icon-wifi.vue';

const IconWifi = Object.assign(_IconWifi, {
  install: (app: App) => {
    app.component(_IconWifi.name, _IconWifi);
  }
});

export default IconWifi;