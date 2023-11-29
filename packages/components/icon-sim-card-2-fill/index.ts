import type { App } from 'vue';
import _IconSimCard2Fill from './icon-sim-card-2-fill.vue';

const IconSimCard2Fill = Object.assign(_IconSimCard2Fill, {
  install: (app: App) => {
    app.component(_IconSimCard2Fill.name, _IconSimCard2Fill);
  }
});

export default IconSimCard2Fill;