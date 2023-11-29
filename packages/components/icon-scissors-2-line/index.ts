import type { App } from 'vue';
import _IconScissors2Line from './icon-scissors-2-line.vue';

const IconScissors2Line = Object.assign(_IconScissors2Line, {
  install: (app: App) => {
    app.component(_IconScissors2Line.name, _IconScissors2Line);
  }
});

export default IconScissors2Line;