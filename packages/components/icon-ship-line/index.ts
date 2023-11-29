import type { App } from 'vue';
import _IconShipLine from './icon-ship-line.vue';

const IconShipLine = Object.assign(_IconShipLine, {
  install: (app: App) => {
    app.component(_IconShipLine.name, _IconShipLine);
  }
});

export default IconShipLine;