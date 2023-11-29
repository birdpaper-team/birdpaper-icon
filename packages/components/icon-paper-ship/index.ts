import type { App } from 'vue';
import _IconPaperShip from './icon-paper-ship.vue';

const IconPaperShip = Object.assign(_IconPaperShip, {
  install: (app: App) => {
    app.component(_IconPaperShip.name, _IconPaperShip);
  }
});

export default IconPaperShip;