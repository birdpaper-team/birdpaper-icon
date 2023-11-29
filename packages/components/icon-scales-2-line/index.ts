import type { App } from 'vue';
import _IconScales2Line from './icon-scales-2-line.vue';

const IconScales2Line = Object.assign(_IconScales2Line, {
  install: (app: App) => {
    app.component(_IconScales2Line.name, _IconScales2Line);
  }
});

export default IconScales2Line;