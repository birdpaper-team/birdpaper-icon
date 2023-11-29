import type { App } from 'vue';
import _IconShip from './icon-ship.vue';

const IconShip = Object.assign(_IconShip, {
  install: (app: App) => {
    app.component(_IconShip.name, _IconShip);
  }
});

export default IconShip;