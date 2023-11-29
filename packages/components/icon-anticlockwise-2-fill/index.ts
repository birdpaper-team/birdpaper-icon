import type { App } from 'vue';
import _IconAnticlockwise2Fill from './icon-anticlockwise-2-fill.vue';

const IconAnticlockwise2Fill = Object.assign(_IconAnticlockwise2Fill, {
  install: (app: App) => {
    app.component(_IconAnticlockwise2Fill.name, _IconAnticlockwise2Fill);
  }
});

export default IconAnticlockwise2Fill;