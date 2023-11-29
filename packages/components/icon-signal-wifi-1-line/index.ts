import type { App } from 'vue';
import _IconSignalWifi1Line from './icon-signal-wifi-1-line.vue';

const IconSignalWifi1Line = Object.assign(_IconSignalWifi1Line, {
  install: (app: App) => {
    app.component(_IconSignalWifi1Line.name, _IconSignalWifi1Line);
  }
});

export default IconSignalWifi1Line;