import type { App } from 'vue';
import _IconSignalWifi2Fill from './icon-signal-wifi-2-fill.vue';

const IconSignalWifi2Fill = Object.assign(_IconSignalWifi2Fill, {
  install: (app: App) => {
    app.component(_IconSignalWifi2Fill.name, _IconSignalWifi2Fill);
  }
});

export default IconSignalWifi2Fill;