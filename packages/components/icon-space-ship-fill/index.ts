import type { App } from 'vue';
import _IconSpaceShipFill from './icon-space-ship-fill.vue';

const IconSpaceShipFill = Object.assign(_IconSpaceShipFill, {
  install: (app: App) => {
    app.component(_IconSpaceShipFill.name, _IconSpaceShipFill);
  }
});

export default IconSpaceShipFill;