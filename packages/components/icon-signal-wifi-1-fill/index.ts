import type { App } from 'vue';
import _IconSignalWifi1Fill from './icon-signal-wifi-1-fill.vue';

const IconSignalWifi1Fill = Object.assign(_IconSignalWifi1Fill, {
  install: (app: App) => {
    app.component(_IconSignalWifi1Fill.name, _IconSignalWifi1Fill);
  }
});

export default IconSignalWifi1Fill;