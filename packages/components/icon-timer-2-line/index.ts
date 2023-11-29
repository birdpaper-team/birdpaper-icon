import type { App } from 'vue';
import _IconTimer2Line from './icon-timer-2-line.vue';

const IconTimer2Line = Object.assign(_IconTimer2Line, {
  install: (app: App) => {
    app.component(_IconTimer2Line.name, _IconTimer2Line);
  }
});

export default IconTimer2Line;