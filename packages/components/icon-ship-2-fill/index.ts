import type { App } from 'vue';
import _IconShip2Fill from './icon-ship-2-fill.vue';

const IconShip2Fill = Object.assign(_IconShip2Fill, {
  install: (app: App) => {
    app.component(_IconShip2Fill.name, _IconShip2Fill);
  }
});

export default IconShip2Fill;