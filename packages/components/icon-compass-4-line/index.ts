import type { App } from 'vue';
import _IconCompass4Line from './icon-compass-4-line.vue';

const IconCompass4Line = Object.assign(_IconCompass4Line, {
  install: (app: App) => {
    app.component(_IconCompass4Line.name, _IconCompass4Line);
  }
});

export default IconCompass4Line;