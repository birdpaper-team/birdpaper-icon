import type { App } from 'vue';
import _IconShip2Line from './icon-ship-2-line.vue';

const IconShip2Line = Object.assign(_IconShip2Line, {
  install: (app: App) => {
    app.component(_IconShip2Line.name, _IconShip2Line);
  }
});

export default IconShip2Line;