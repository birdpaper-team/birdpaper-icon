import type { App } from 'vue';
import _IconSignalWifiFill from './icon-signal-wifi-fill.vue';

const IconSignalWifiFill = Object.assign(_IconSignalWifiFill, {
  install: (app: App) => {
    app.component(_IconSignalWifiFill.name, _IconSignalWifiFill);
  }
});

export default IconSignalWifiFill;