import type { App } from 'vue';
import _IconSpam2Line from './icon-spam-2-line.vue';

const IconSpam2Line = Object.assign(_IconSpam2Line, {
  install: (app: App) => {
    app.component(_IconSpam2Line.name, _IconSpam2Line);
  }
});

export default IconSpam2Line;