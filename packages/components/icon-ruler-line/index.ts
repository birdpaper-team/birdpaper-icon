import type { App } from 'vue';
import _IconRulerLine from './icon-ruler-line.vue';

const IconRulerLine = Object.assign(_IconRulerLine, {
  install: (app: App) => {
    app.component(_IconRulerLine.name, _IconRulerLine);
  }
});

export default IconRulerLine;