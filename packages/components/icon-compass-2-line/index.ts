import type { App } from 'vue';
import _IconCompass2Line from './icon-compass-2-line.vue';

const IconCompass2Line = Object.assign(_IconCompass2Line, {
  install: (app: App) => {
    app.component(_IconCompass2Line.name, _IconCompass2Line);
  }
});

export default IconCompass2Line;