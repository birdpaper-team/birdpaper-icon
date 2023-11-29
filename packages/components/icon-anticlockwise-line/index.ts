import type { App } from 'vue';
import _IconAnticlockwiseLine from './icon-anticlockwise-line.vue';

const IconAnticlockwiseLine = Object.assign(_IconAnticlockwiseLine, {
  install: (app: App) => {
    app.component(_IconAnticlockwiseLine.name, _IconAnticlockwiseLine);
  }
});

export default IconAnticlockwiseLine;