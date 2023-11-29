import type { App } from 'vue';
import _IconRepeat2Line from './icon-repeat-2-line.vue';

const IconRepeat2Line = Object.assign(_IconRepeat2Line, {
  install: (app: App) => {
    app.component(_IconRepeat2Line.name, _IconRepeat2Line);
  }
});

export default IconRepeat2Line;