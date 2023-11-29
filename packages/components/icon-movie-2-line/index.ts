import type { App } from 'vue';
import _IconMovie2Line from './icon-movie-2-line.vue';

const IconMovie2Line = Object.assign(_IconMovie2Line, {
  install: (app: App) => {
    app.component(_IconMovie2Line.name, _IconMovie2Line);
  }
});

export default IconMovie2Line;