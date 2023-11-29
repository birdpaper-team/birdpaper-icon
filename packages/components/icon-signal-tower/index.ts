import type { App } from 'vue';
import _IconSignalTower from './icon-signal-tower.vue';

const IconSignalTower = Object.assign(_IconSignalTower, {
  install: (app: App) => {
    app.component(_IconSignalTower.name, _IconSignalTower);
  }
});

export default IconSignalTower;