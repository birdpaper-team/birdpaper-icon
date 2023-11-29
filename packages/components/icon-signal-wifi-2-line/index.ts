import type { App } from 'vue';
import _IconSignalWifi2Line from './icon-signal-wifi-2-line.vue';

const IconSignalWifi2Line = Object.assign(_IconSignalWifi2Line, {
  install: (app: App) => {
    app.component(_IconSignalWifi2Line.name, _IconSignalWifi2Line);
  }
});

export default IconSignalWifi2Line;