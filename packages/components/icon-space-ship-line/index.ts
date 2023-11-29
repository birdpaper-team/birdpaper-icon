import type { App } from 'vue';
import _IconSpaceShipLine from './icon-space-ship-line.vue';

const IconSpaceShipLine = Object.assign(_IconSpaceShipLine, {
  install: (app: App) => {
    app.component(_IconSpaceShipLine.name, _IconSpaceShipLine);
  }
});

export default IconSpaceShipLine;