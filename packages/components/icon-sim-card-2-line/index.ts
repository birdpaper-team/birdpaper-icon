import type { App } from 'vue';
import _IconSimCard2Line from './icon-sim-card-2-line.vue';

const IconSimCard2Line = Object.assign(_IconSimCard2Line, {
  install: (app: App) => {
    app.component(_IconSimCard2Line.name, _IconSimCard2Line);
  }
});

export default IconSimCard2Line;