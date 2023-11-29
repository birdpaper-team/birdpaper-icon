import type { App } from 'vue';
import _IconSignalWifi3Line from './icon-signal-wifi-3-line.vue';

const IconSignalWifi3Line = Object.assign(_IconSignalWifi3Line, {
  install: (app: App) => {
    app.component(_IconSignalWifi3Line.name, _IconSignalWifi3Line);
  }
});

export default IconSignalWifi3Line;