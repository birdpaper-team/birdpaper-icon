import type { App } from 'vue';
import _IconSignalWifi3Fill from './icon-signal-wifi-3-fill.vue';

const IconSignalWifi3Fill = Object.assign(_IconSignalWifi3Fill, {
  install: (app: App) => {
    app.component(_IconSignalWifi3Fill.name, _IconSignalWifi3Fill);
  }
});

export default IconSignalWifi3Fill;