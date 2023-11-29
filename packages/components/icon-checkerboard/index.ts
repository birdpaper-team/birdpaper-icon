import type { App } from 'vue';
import _IconCheckerboard from './icon-checkerboard.vue';

const IconCheckerboard = Object.assign(_IconCheckerboard, {
  install: (app: App) => {
    app.component(_IconCheckerboard.name, _IconCheckerboard);
  }
});

export default IconCheckerboard;