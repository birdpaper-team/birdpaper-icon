import type { App } from 'vue';
import _IconRuler2Line from './icon-ruler-2-line.vue';

const IconRuler2Line = Object.assign(_IconRuler2Line, {
  install: (app: App) => {
    app.component(_IconRuler2Line.name, _IconRuler2Line);
  }
});

export default IconRuler2Line;