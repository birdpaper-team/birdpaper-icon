import type { App } from 'vue';
import _IconAnticlockwiseFill from './icon-anticlockwise-fill.vue';

const IconAnticlockwiseFill = Object.assign(_IconAnticlockwiseFill, {
  install: (app: App) => {
    app.component(_IconAnticlockwiseFill.name, _IconAnticlockwiseFill);
  }
});

export default IconAnticlockwiseFill;