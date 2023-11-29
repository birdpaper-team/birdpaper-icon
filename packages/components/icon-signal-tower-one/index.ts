import type { App } from 'vue';
import _IconSignalTowerOne from './icon-signal-tower-one.vue';

const IconSignalTowerOne = Object.assign(_IconSignalTowerOne, {
  install: (app: App) => {
    app.component(_IconSignalTowerOne.name, _IconSignalTowerOne);
  }
});

export default IconSignalTowerOne;