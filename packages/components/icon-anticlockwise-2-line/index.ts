import type { App } from 'vue';
import _IconAnticlockwise2Line from './icon-anticlockwise-2-line.vue';

const IconAnticlockwise2Line = Object.assign(_IconAnticlockwise2Line, {
  install: (app: App) => {
    app.component(_IconAnticlockwise2Line.name, _IconAnticlockwise2Line);
  }
});

export default IconAnticlockwise2Line;