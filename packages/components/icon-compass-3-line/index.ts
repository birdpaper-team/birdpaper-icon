import type { App } from 'vue';
import _IconCompass3Line from './icon-compass-3-line.vue';

const IconCompass3Line = Object.assign(_IconCompass3Line, {
  install: (app: App) => {
    app.component(_IconCompass3Line.name, _IconCompass3Line);
  }
});

export default IconCompass3Line;