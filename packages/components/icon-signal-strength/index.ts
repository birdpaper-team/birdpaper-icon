import type { App } from 'vue';
import _IconSignalStrength from './icon-signal-strength.vue';

const IconSignalStrength = Object.assign(_IconSignalStrength, {
  install: (app: App) => {
    app.component(_IconSignalStrength.name, _IconSignalStrength);
  }
});

export default IconSignalStrength;