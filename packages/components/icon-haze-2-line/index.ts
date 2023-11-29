import type { App } from 'vue';
import _IconHaze2Line from './icon-haze-2-line.vue';

const IconHaze2Line = Object.assign(_IconHaze2Line, {
  install: (app: App) => {
    app.component(_IconHaze2Line.name, _IconHaze2Line);
  }
});

export default IconHaze2Line;