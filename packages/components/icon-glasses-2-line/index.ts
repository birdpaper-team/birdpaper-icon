import type { App } from 'vue';
import _IconGlasses2Line from './icon-glasses-2-line.vue';

const IconGlasses2Line = Object.assign(_IconGlasses2Line, {
  install: (app: App) => {
    app.component(_IconGlasses2Line.name, _IconGlasses2Line);
  }
});

export default IconGlasses2Line;