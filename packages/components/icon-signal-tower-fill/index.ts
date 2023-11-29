import type { App } from 'vue';
import _IconSignalTowerFill from './icon-signal-tower-fill.vue';

const IconSignalTowerFill = Object.assign(_IconSignalTowerFill, {
  install: (app: App) => {
    app.component(_IconSignalTowerFill.name, _IconSignalTowerFill);
  }
});

export default IconSignalTowerFill;