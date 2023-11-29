import type { App } from 'vue';
import _IconShipFill from './icon-ship-fill.vue';

const IconShipFill = Object.assign(_IconShipFill, {
  install: (app: App) => {
    app.component(_IconShipFill.name, _IconShipFill);
  }
});

export default IconShipFill;