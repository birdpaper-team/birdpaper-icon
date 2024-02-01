import type { App } from 'vue';
import _IconRam2Line from './icon-ram-2-line.vue';

const IconRam2Line = Object.assign(_IconRam2Line, {
  install: (app: App) => {
    app.component(_IconRam2Line.name, _IconRam2Line);
  }
});

export default IconRam2Line;